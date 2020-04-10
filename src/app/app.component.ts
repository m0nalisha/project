import { Component, OnInit } from '@angular/core';
import * as firebase  from  'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDJ5wk3ZCxNtI7slLmEUM0llL2IxfWGSuo",
      authDomain: "recepie-book-25e76.firebaseapp.com"
    });
  }
  title = 'StartedAngularLearning';
  feature = 'Recepie';
  onNavigate(feature:string)
  {
     this.feature = feature;
  }
}
