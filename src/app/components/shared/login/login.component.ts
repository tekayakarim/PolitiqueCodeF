import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { TokenStorageService } from "../../../services/token-storage.service";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  authError = false;
  isLoggedIn = false;
  errorMessage = "";
  roles = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: AuthService,
    public tokenStorage: TokenStorageService,
    private spinner: NgxSpinnerService,
    public toastr: ToastrService
  ) { 
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.tokenStorage.signOut();
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  submitFunction() {
    if (this.f.username.errors)
      this.toastr.error("Entrer votre nom d'utilisateur");
    if (this.f.password.errors) this.toastr.error("Entrer votre mot de passe");
    else {
      this.submitted = true;
      let loginData = this.loginService.login(this.loginForm.value);
      if (loginData) {
        loginData.subscribe(
          data => {
            this.tokenStorage.saveToken(data.accessToken);

            this.isLoggedIn = true;
            this.roles =data.roles;
      console.warn(data);
console.warn(this.roles);

            this.toastr.success("bienvenue "+data.username, "", {
              timeOut: 3000,
            });
          },
          err => {
            this.errorMessage = err.error.message;  
          }
        );
      }
    }
  }

  onSubmit() {
    this.spinner.show();
    setTimeout(() => {
      this.submitFunction();
    }, 1000);
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
