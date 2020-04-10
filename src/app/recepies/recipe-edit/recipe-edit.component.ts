import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recepie } from '../recipe.model';
import { Ingredient } from 'src/app/shared/Ingredients.model';
import { RecepieService } from '../recepie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscribe.unsubscribe()
  }
  id:number;
  editMode=false;
  newRecepie:Recepie 
  recepieEdit:FormGroup
  subscribe : Subscription
  constructor(private route:ActivatedRoute,
    private recepieService:RecepieService,
    private router:Router) { }

  ngOnInit() {
  this.subscribe = this.route.params.subscribe(
     (param:Params)=>{
       this.id=param['id'];
       this.editMode=this.id!=null;
       this.initForm()
     }
   )
  }
  saveNewRecepie()
  {
    let recepie :Recepie = new Recepie(
      this.recepieEdit.value['name'],
      this.recepieEdit.value['description'],
      this.recepieEdit.value['url'],
      this.recepieEdit.value['ingredients']
    )
    if(this.editMode){
       this.recepieService.updateRecepie(this.id,recepie)
    }else{
      this.recepieService.addRecepie(recepie)
    }
     this.router.navigate(['../'],{relativeTo:this.route})
  }

  initForm()
  {
    let recepieName=''
    let recepieImagePath=''
    let recepieDescription=''
    let recepieIngredients= new FormArray([]);
    if(this.editMode){
      const recepie = this.recepieService.getRecepie(this.id)
      recepieName = recepie.name
      recepieImagePath = recepie.imagePath
      recepieDescription = recepie.description
      if(recepie['ingredients']) {
        for (let ingredient of recepie.ingredients) {
         recepieIngredients.push(
           new FormGroup({
             'name': new FormControl(ingredient.name,Validators.required),
             'amount':new FormControl(ingredient.amount,[Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)])
           })
         );
        }
      }
    }
    this.recepieEdit=new FormGroup({
      'name': new FormControl(recepieName,Validators.required),
      'url' : new FormControl(recepieImagePath,Validators.required),
      'description' : new FormControl(recepieDescription,Validators.required),
      'ingredients' : recepieIngredients,
    });

    console.log(this.recepieEdit.get('ingredients'))
  }

  addIngredients()
  {
    (<FormArray>this.recepieEdit.get('ingredients')).push(
        new FormGroup({
        'name' : new FormControl(),
        'amount' : new FormControl()
       })
    )
  }

  deleteIngredient(id:number)
  {
    (<FormArray>this.recepieEdit.get('ingredients')).removeAt(id)
  }

  cancel()
  {
    this.router.navigate(['../'],{relativeTo:this.route})
  }

}
