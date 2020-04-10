import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recepie} from '../recipe.model';
import { RecepieService } from '../recepie.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recepies:Recepie[];
  constructor(private recepieService:RecepieService,
    private route:Router,
    private activeRoute:ActivatedRoute){
   }
   ngOnInit(){
     this.recepieService.newRecepie.subscribe(
       (recipies:Recepie[])=>{
         this.recepies = recipies
       }
     )
     this.recepies = this.recepieService.getRecepies();
   }

   addRecipe()
   {
     this.route.navigate(['new'],{relativeTo:this.activeRoute})
   }
}
