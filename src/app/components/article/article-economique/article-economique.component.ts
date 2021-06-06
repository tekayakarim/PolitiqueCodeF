import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
@Component({
  selector: 'app-article-economique',
  templateUrl: './article-economique.component.html',
  styleUrls: ['./article-economique.component.scss']
})
export class ArticleEconomiqueComponent implements OnInit {

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
