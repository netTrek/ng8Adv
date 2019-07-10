import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { RxjsSamplesComponent } from './rxjs-samples/rxjs-samples.component';
import { DiSampleComponent } from './di-samples/di-sample.component';
import { ModaAComponent } from './modal/moda-a/moda-a.component';
import { TempDrivenComponent } from './temp-driven/temp-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { EmbeddedSamplesComponent } from './embedded-samples/embedded-samples.component';
import { DynCompComponent } from './dyn-comp/dyn-comp.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dynComp'
  },
  {
    path: 'dynComp',
    component: DynCompComponent
  },
  {
    path: 'embeddedSamples',
    component: EmbeddedSamplesComponent
  },
  {
    path: 'templateDriven',
    component: TempDrivenComponent
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent
  },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'rxjs',
    component: RxjsSamplesComponent
  },
  {
    path: 'di',
    component: DiSampleComponent
  },
  {
    path: 'modalA',
    component: ModaAComponent,
    outlet: 'modal'
  },
  {
    path: '**',
    redirectTo: 'list'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
