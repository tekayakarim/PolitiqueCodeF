import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokenStorageService } from "src/app/services/token-storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

   isLogin=false; 
  jwtHelper = new JwtHelperService();
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
  
  ) {  }



  ngOnInit(): void {
    if (this.tokenStorage.getToken() != null) {
     this.isLogin=true;
      let user = this.jwtHelper.decodeToken(this.tokenStorage.getToken());
   console.warn(user);
   
    
    }

  
  }

}
