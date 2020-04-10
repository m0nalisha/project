import { Component, OnInit,Output } from '@angular/core';
import { DataStrorageService } from '../shared/dataStorage.service';
import { RecepieService } from '../recepies/recepie.service';
import { Recepie } from '../recepies/recipe.model';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService : DataStrorageService,private recepieService:RecepieService,
    private authService : AuthService){}

  saveData()
  {
     this.dataStorageService.saveData().subscribe(
      (response : Response)=>{ console.log(response);}
     )
  }
  
  getRecipes()
  {
    this.dataStorageService.getRecipe().subscribe(
      (response : Response) =>{
        const recepie :Recepie[] = response.json();
       this.recepieService.setRecepie(recepie)
      }
    )
  }

  logMeOut()
  {
    this.authService.logOut()
  }

  

}
