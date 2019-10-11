import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PipeSamplesComponent } from './pipe-sample/pipe-samples/pipe-samples.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserResolveServiceService } from './user/user-resolve-service.service';
import { UserDetailGuard } from './user/user-details/user-detail.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'user', component: UserComponent },
  {path: 'user/:id',
    component: UserDetailsComponent,
    canActivate: [
      UserDetailGuard
    ],
    data: {
      saban: 'hallo'
    },
    resolve: {
      userDetail: UserResolveServiceService
    }
  },
  {path: 'home', component: HomeComponent },
  {path: 'dash',
    loadChildren: () => import ('./dash/dash.module')
      .then( m => m.DashModule )},
  {path: 'contact',
    loadChildren: () => import ('./contact/contact.module')
      .then( m => m.ContactModule )},
  {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
