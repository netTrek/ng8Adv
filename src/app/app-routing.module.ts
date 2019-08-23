import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserResolveService } from './user/user-resolve.service';
import { UserActivateGuard } from './user/user-activate.guard';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent,
  children: [
    {path: '', redirectTo: 'map', pathMatch: 'full'},
    {path: 'map', component: MapComponent},
    {path: 'form', component: FormComponent}
  ]},
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent
    , data: {company: 'dvz'}
    , resolve: {user: UserResolveService }
    , canActivate: [UserActivateGuard]
    },
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
