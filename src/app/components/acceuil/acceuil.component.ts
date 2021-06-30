import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

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
