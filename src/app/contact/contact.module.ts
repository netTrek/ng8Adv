import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { MapComponent } from './contact/map/map.component';


@NgModule({
  declarations: [ContactComponent, FormComponent, MapComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
