import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RxjsSamplesComponent } from './rxjs-samples/rxjs-samples.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserResolverService } from './user/user-resolver.service';
import { UserDetailGuard } from './user/user-detail.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserDetailComponent,
  resolve: {
    userData: UserResolverService
  }, canActivate: [UserDetailGuard] },
  {path: 'home', component: HomeComponent},
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  {path: '**', redirectTo: 'home'},
  {path: 'rxjs', component: RxjsSamplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
