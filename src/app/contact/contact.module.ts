import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './contact/form/form.component';
import { MapComponent } from './contact/map/map.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactComponent, FormComponent, MapComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule { }
