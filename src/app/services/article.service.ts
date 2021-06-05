import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  URL = 'http://localhost:8000/article';
  constructor(private http: HttpClient) { }

  addArticle(article:any): Observable<any> {
    return this.http.post(this.URL + '/ajouterArticle', {
      textArticle: article.textArticle,
      typeArticle: article.typeArticle,
      nomLivre: article.nomLivre,
      dateSortieLivre: article.dateSortieLivre,
      nomAuteur: article.nomAuteur,
      imageUrlAuteur: article.imageUrlAuteur,
      user: article.user,
    });
  }
  getArticles():Observable<any>{
    return this.http.get(this.URL+"/recupererArticles" );
  }
}
