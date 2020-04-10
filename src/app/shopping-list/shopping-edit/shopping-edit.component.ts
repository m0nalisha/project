import { Component, OnInit, ViewChild, ElementRef, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy  {

  subscription : Subscription
  @ViewChild('f') shoppingEditForm:NgForm
  constructor(private shoppingListService:ShoppingListService){}
  selectedIngredient : Ingredient;
  editMode : boolean = false
  index : number;
  ngOnInit(): void {
    this.subscription=this.shoppingListService.editItem.subscribe(
      (index:number)=>{
        this.selectedIngredient = this.shoppingListService.getIngredient(index);
        this.editMode = true;
        this.index = index; 
        this.shoppingEditForm.setValue({
          name : this.selectedIngredient.name,
          amount : this.selectedIngredient.amount
        })
      }
    )
   
  }
  
  addIngredient(form: NgForm)
  {
    const name = form.value.name;
    const amount = form.value.amount;
    const newIng = new Ingredient(name,amount);
    if(this.editMode)
    {
        this.shoppingListService.updateIngredients(this.index,newIng)
    }
    else
    this.shoppingListService.addIngredient(newIng);
    this.editMode=false
    form.reset();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clear()
  {
    this.editMode= false;
    this.shoppingEditForm.reset();
  }

  delete()
  {
      this.shoppingListService.deleteIngredients(this.index)
      this.editMode=false
      this.shoppingEditForm.reset()
  }
 

}
