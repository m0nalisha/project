import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from '../shared/Ingredients.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients:Ingredient[];

  constructor(private shoppingListService: ShoppingListService){}
  ngOnInit(){
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[])=>{
        this.ingredients=ingredient;
      }
    );
  }

   pushIngredient(ingredient:Ingredient)
   {
    this.ingredients.push(ingredient);
   }

   editIngredient(i:number){
     this.shoppingListService.editItem.next(i);
   }


}
