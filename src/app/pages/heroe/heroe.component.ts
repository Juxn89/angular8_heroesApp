import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor() { }

  ngOnInit() {
  }

  Guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario inválido');
    }
    console.log('form:', form);
    console.log('heroe:', this.heroe);
  }
}
