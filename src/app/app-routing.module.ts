import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PipeSamplesComponent } from './pipe-sample/pipe-samples/pipe-samples.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'user', component: UserComponent },
  {path: 'home', component: HomeComponent },
  {path: 'dash',
    loadChildren: () => import ('./dash/dash.module')
      .then( m => m.DashModule )},
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
