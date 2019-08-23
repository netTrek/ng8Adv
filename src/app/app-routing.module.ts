import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent},
  { path: 'dash', loadChildren: () => import ('./dash/dash.module')
      .then( m => m.DashModule ) },
  { path: '**', redirectTo: 'home' } // Terminierung 404
  // hier keine weitere Configs mehr weil terminiert
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
