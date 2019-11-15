import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CountdownComponent } from './utils/countdown/countdown.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './contact/map/map.component';
import { FormComponent } from './contact/form/form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: 'contact', component: ContactComponent, children: [
    { path: 'map', component: MapComponent },
    { path: 'form', component: FormComponent },
    { path: '', pathMatch: 'full', redirectTo: 'map' }
    ] },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'dash', loadChildren: './dash/dash.module#DashModule' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
