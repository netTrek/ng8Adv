import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { DetailGuard } from './user/detail.guard';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'dash', component: DashComponent},
  {path: 'contact', component: ContactComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'map'},
    {path: 'map', component: MapComponent},
    {path: 'form', component: FormComponent}
    ]},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailComponent,
  canActivate: [ DetailGuard ]},
  {path: 'lazy', loadChildren: () => import('./lazy/lazy.module')
      .then( m => m.LazyModule )},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
