import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

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
    // console.log('form:', form);
    // console.log('heroe:', this.heroe);

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroeService.ActualizarHeroe(this.heroe);
      /*
      this.heroeService.ActualizarHeroe(this.heroe).subscribe(response => {
        console.log(response);
      });
      */
    } else {
      peticion = this.heroeService.CrearHeroe(this.heroe);
      /*
      this.heroeService.CrearHeroe(this.heroe).subscribe(response => {
        console.log(response);
      });
      */
    }

    peticion.subscribe(response => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se ha guardado correctamente.',
        type: 'success',
      });
    });
  }
}
