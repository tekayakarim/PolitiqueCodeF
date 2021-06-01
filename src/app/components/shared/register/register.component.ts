import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;


  constructor(public authService: AuthService,
    public formBuilder: FormBuilder,
    public toastr: ToastrService
    ) {
      this.userForm = this.formBuilder.group({
        username: ["", Validators.required],
        password: ["", Validators.required],
        passwordConfirm: ["", Validators.required],
        email: ["", Validators.required],
      });
     }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.value.password===this.userForm.value.passwordConfirm) {
      console.warn(this.userForm.value);
      
    this.authService.register(this.userForm.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success(data.message, "", {
          timeOut: 3000,
         
        
        });
      },
      err => {
        console.log(err);
        
        this.toastr.error(err.error.message, "", {
          timeOut: 3000,
         
        
        });
      }
    );
  }
  else{
    this.toastr.warning("les mots de passe ne sont pas identiques", "", {
      timeOut: 3000,
    });
  }
}
  
}
