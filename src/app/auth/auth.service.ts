import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService{
  constructor(private route:Router){}
  token : String;
    signUpUser(email:string, password:string){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
          error => console.log(error)
      )
    }

    SignInUser(email:string, password:string){
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        response => {
          console.log(response)
         firebase.auth().currentUser.getIdToken().then(
           (tokn:string) => this.token = tokn)
           this.route.navigate(['/'])
          }
         )
         .catch(
          error => { console.log(error)}
           );
    }

    getToken()
    {
      firebase.auth().currentUser.getIdToken().then(
        (tokn:string) => this.token = tokn);
        return this.token;
    }

  isAuthenticated()
  {
   return this.token != null
  }

  logOut()
  {
    this.token=null
  }

}