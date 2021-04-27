import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  submitted = false;
  mailChimpEndpoint = 'https://gmail.us1.list-manage.com/subscribe/post-json?u=6c35a170982691829190212b7&amp;id=02ed19ca8d&';
  error = '';
  
  nombre:   string;
  email:    string;
  telefono: string;
  mensaje:  string;

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('onSubmit ejecutado');
    console.log('Nombre: ' + this.nombre);
    this.error = '';
    const params = new HttpParams()
            .set('EMAIL', this.email)
            .set('NAME', this.nombre)
            .set('PHONE', this.telefono)
            .set('MMERGE6', this.mensaje)
            // .set('b_6c35a170982691829190212b7_02ed19ca8d','')

    const mailChimpUrl = this.mailChimpEndpoint + params.toString();
    console.log(mailChimpUrl);

    this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe( response => {
      console.log('response ', response);
      if (response.result && response.result !== 'error' ) {
        this.submitted = true;
        console.log("submitted!");
      } else {
        console.log("Error");
        this.error = response.msg;
      }
    }, error => {
      console.log(error);
      this.error = 'Hubo un error';
    });
  }

}
