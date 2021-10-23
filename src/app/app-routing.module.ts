import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { Error404Component } from './error404/error404.component';
import { PostviewComponent } from './postview/postview.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full' },
  {path:'home', component:BloghomeComponent},
  {path:'posts', component:PostviewComponent},
  {path:'**',component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
