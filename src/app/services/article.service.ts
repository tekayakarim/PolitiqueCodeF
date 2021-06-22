import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  URL = 'http://localhost:8000/article';
  constructor(private http: HttpClient) { }

  addArticle(article:any ,image:File): Observable<any> {
    const profileData = new FormData();
profileData.append("textArticle", article.textArticle);
profileData.append("typeArticle", article.typeArticle);
profileData.append("nomLivre", article.nomLivre);
profileData.append("dateSortieLivre", article.dateSortieLivre);
profileData.append("nomAuteur", article.nomAuteur);
profileData.append("user", article.user);
profileData.append("imageUrlAuteur", article.imageUrlAuteur);
profileData.append("image", image);

    return this.http.post(this.URL + '/ajouterArticle', profileData);
  }
  getArticles():Observable<any>{
    return this.http.get(this.URL+"/recupererArticles" );
  }
}
