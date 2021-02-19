import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-contact-form',
  templateUrl: './float-contact-form.component.html',
  styleUrls: ['./float-contact-form.component.css']
})
export class FloatContactFormComponent implements OnInit {

  nombre:   string;
  email:    string;
  telefono: string;
  mensaje:  string;


  constructor() { }

  ngOnInit(): void {
  }

}
