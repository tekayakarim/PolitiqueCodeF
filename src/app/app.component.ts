import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { TokenStorageService } from "./services/token-storage.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PolitiqueCod';

  isLoggedIn$!: Observable<boolean>;
  
constructor(private tokenStorageService: TokenStorageService) {

}

ngOnInit(): void {
  this.isLoggedIn$ = this.tokenStorageService.isLoggedIn; // {2}
  if (this.tokenStorageService.getUser() == null) {
  }
}

}