import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WhatsappComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    WhatsappComponent
  ]
})
export class SharedModule { }
