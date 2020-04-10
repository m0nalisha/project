import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recipe.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

//@Input() recepie : Recepie;
recepie : Recepie;
id : number;
constructor(private recepieService:RecepieService,
  private activeRoute: ActivatedRoute,
  private route:Router){}
  ngOnInit()
  {
    this.activeRoute.params.subscribe(
      (params:Params)=>{
        this.id = params.id
        this.recepie=this.recepieService.getRecepie(+params['id']);
      }
    )
  }
 addToShoppingList(){
   this.recepieService.toShoppingList(this.recepie.ingredients);
 }

 editRecipe()
 {
   this.route.navigate(['edit'],{relativeTo:this.activeRoute});
 }

 deleteRecepie()
 {
   this.recepieService.deleteRecepie(this.id)
   this.route.navigate(['../'],{relativeTo:this.activeRoute})
 }

}
