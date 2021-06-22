import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ArticleService } from '../../../services/article.service';
import { TokenStorageService } from "../../../services/token-storage.service";


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articleForm: FormGroup;

  imageData: string="";

  constructor(
  
    public formBuilder: FormBuilder,
  
    public toastr: ToastrService,
    public router: Router,
    private articleService:ArticleService,
    public tokenStorage: TokenStorageService,
  ) {
    this.articleForm = this.formBuilder.group({
      textArticle: ["", Validators.required],
      typeArticle: ["", Validators.required],
      nomLivre: ["", Validators.required],
      dateSortieLivre: ["", Validators.required],
      nomAuteur: ["", Validators.required],
      imageUrlAuteur: ["", Validators.required],
      image: [null, Validators.required],
      user: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
this.articleForm.value.user=this.tokenStorage.getUser();

console.warn(this.articleForm.value);


console.warn(this.articleForm.value.image);

      this.articleService.addArticle(this.articleForm.value,this.articleForm.value.image).subscribe(
        
        (data) => {
          let txt=data.message; 
          if (txt.includes("enregistré")) {
            setTimeout(function () {
             window.location.reload();
            }, 700);
            console.warn(data);
            this.toastr.success("Ajouté avec succès", "", { timeOut: 3000 });
          }
        },
        (ex) => {
          console.log(ex);
          this.toastr.warning("Erreur", "", { timeOut: 3000 });
        }
      );
    }
 
    onFileSelect(event: Event) {
      let ch=(event.target as HTMLInputElement);
      if (ch.files) {
        const file = ch.files[0] ;
console.log("worked");

      this.articleForm.patchValue({ image: file });
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
      }

      }
    }

  }

