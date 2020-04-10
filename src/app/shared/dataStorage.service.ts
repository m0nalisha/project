import { Injectable } from "@angular/core";
import { RecepieService } from "../recepies/recepie.service";
import { Http } from "@angular/http";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStrorageService{

    constructor(private http:Http, private recepieService:RecepieService,private authService:AuthService){
    }

    saveData()
    {
        const token = this.authService.getToken()
        return this.http.put("https://recepie-book-25e76.firebaseio.com/data.json?auth="+token,this.recepieService.getRecepies())
    }

    getRecipe()
    {
        const token = this.authService.getToken()
        return this.http.get("https://recepie-book-25e76.firebaseio.com/data.json?auth="+token)
    }

}