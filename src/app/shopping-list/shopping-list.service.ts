import { Ingredient } from "../shared/Ingredients.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    editItem = new Subject<number>();
       private  ingredients:Ingredient[]=[
        new Ingredient("milk",1),
        new Ingredient("sugar",1)
      ];

      getIngredients()
      {
          return this.ingredients.slice();
      }

    getIngredient(index:number)
    {
      return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient)
    {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
    }

      addIngredients(ingredient:Ingredient[])
      {
          this.ingredients.push(...ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      updateIngredients(index:number,newIngredient:Ingredient){
        this.ingredients[index] = newIngredient
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      deleteIngredients(index:number)
      {
        this.ingredients.splice(index,1)
        this.ingredientsChanged.next(this.ingredients.slice())
      }
}