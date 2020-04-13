import { CanActivate } from "@angular/router/src/utils/preactivation";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authservice:AuthService){}
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return this.authservice.isAuthenticated()
    }
    
}