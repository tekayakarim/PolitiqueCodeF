import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor( public toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.success("not found ", "", {
      timeOut: 3000,
       positionClass: 'toast-top-right',
    
    });
  }

}
