import { Component, OnInit } from '@angular/core';

import { Recepie } from './recipe.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
})
export class RecepiesComponent implements OnInit {
recepie:Recepie;
constructor(private recepieService:RecepieService){}
ngOnInit(){
 this.recepieService.recepieSelected.subscribe(
   (recepie:Recepie) => {
     this.recepie = recepie;
   }
 );
}
}
