import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
@Component({
  selector: 'app-article-juridique',
  templateUrl: './article-juridique.component.html',
  styleUrls: ['./article-juridique.component.scss']
})
export class ArticleJuridiqueComponent implements OnInit {

  Articles:any;

  constructor(
    private articleService:ArticleService
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
