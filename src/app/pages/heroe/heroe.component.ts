import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(private heroeService: HeroesService) { }

  ngOnInit() {
  }

  Guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario inválido');
      return;
    }
    console.log('form:', form);
    console.log('heroe:', this.heroe);

    this.heroeService.CrearHeroe(this.heroe).subscribe(response => {
      console.log(response);
    });
  }
}
