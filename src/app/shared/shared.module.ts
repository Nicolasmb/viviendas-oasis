// MODULOS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
// COMPONENTES
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { FloatContactFormComponent } from './float-contact-form/float-contact-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WhatsappComponent,
    FloatContactFormComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    WhatsappComponent,
    FloatContactFormComponent,
    ContactFormComponent
  ]
})
export class SharedModule { }
