import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  signin(form: NgForm){
    this.authService.SignInUser(form.value.email,form.value.password)
  }
  

}
