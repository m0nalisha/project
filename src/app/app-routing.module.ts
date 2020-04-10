import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'/recepies', pathMatch:'full'},
  {path:'shoppingList', component:ShoppingListComponent},
  {path:'recepies', component:RecepiesComponent, children:[
  {path:'', component:RecipeStartComponent},
  {path:'new', component:RecipeEditComponent,canActivate:[AuthGuard]},
  {path:':id', component: RecipeDetailsComponent },
  {path:':id/edit', component: RecipeEditComponent,canActivate:[AuthGuard] },
  ]},
  {path: 'signup', component:SignupComponent},
  {path: 'signin', component:SigninComponent},
  {path:'logOut',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
