import { Recepie } from "./recipe.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecepieService{
recepieSelected = new EventEmitter<Recepie>();
private recepies:Recepie[]=[
    new Recepie("kajuBarfi",
    "it is a sweet",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuplu6eWsPDX_IqCD_ToOB9f19k_9JIVOjtI_twLS1QRLLrNR&s",
    [
      new Ingredient("milk",2),
      new Ingredient('sugar',1)
    ]),
    new Recepie("Hamburger", "it is snack",
    "https://media.treehugger.com/assets/images/2018/09/80_Big-Mac.jpg.860x0_q70_crop-scale.jpg",
    [
      new Ingredient("Bun",2),
      new Ingredient("sausage",3)
    ])
  ];

  newRecepie = new Subject<Recepie[]>();

  constructor(private slService : ShoppingListService)
  {}
  addRecepie(recepie:Recepie)
  {
    this.recepies.push(recepie)
    this.newRecepie.next(this.recepies.slice())
  }
  updateRecepie(id:number, recepie:Recepie)
  {
    this.recepies[id] = recepie
    this.newRecepie.next(this.recepies.slice())
  }
  getRecepies()
  {
      return this.recepies.slice();
    
  }

  toShoppingList(ingredients:Ingredient[]){
     this.slService.addIngredients(ingredients);
  }

  getRecepie(index:number)
  {
    return this.recepies[index];
  }

  deleteRecepie(id:number)
  {
    this.recepies.splice(id,1)
    this.newRecepie.next(this.recepies.slice())
  }
 
  setRecepie(recipe:Recepie[])
  {
    this.recepies = recipe;
    this.newRecepie.next(this.recepies.slice())
  }

}