import { Component, Input, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-article-politique',
  templateUrl: './article-politique.component.html',
  styleUrls: ['./article-politique.component.scss']
})
export class ArticlePolitiqueComponent implements OnInit {

  
 Articles:any;
 
  constructor(
    private articleService:ArticleService,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {  
this.getAll();

  }

  getAll(){
    this.articleService.getArticles().subscribe(
      (data) => {
   if (data) {
     console.warn(data);
     
     this.Articles=data;
   }
      },
      (ex) => {
        console.log(ex);
        
      }
    );
  }
 
}
