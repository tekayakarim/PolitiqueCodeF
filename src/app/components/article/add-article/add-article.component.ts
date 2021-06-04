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
      user: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
this.articleForm.value.user=this.tokenStorage.getUser();
console.warn(this.articleForm.value);

      this.articleService.addArticle(this.articleForm.value).subscribe(
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
 
  }

