import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  nombre:   string;
  email:    string;
  telefono: string;
  mensaje:  string;

  constructor() { }

  ngOnInit(): void {
  }

}
