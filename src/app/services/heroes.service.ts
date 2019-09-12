import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-30fa4.firebaseio.com/';

  constructor(private http: HttpClient) { }

  CrearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe(
        map((response: any) => {
          heroe.id = response.name;
          return heroe;
        })
      );
  }

  ActualizarHeroe(heroe: HeroeModel) {
    const heroeTemp = { ...heroe };

    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroe(id: string ) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        // UN MAP TRANSFORMA UNA INFORMACIÓN Y LO RETORNA EN OTRA COSA
        // map(response => this.crearArreglo(response)) // OPCIÓN #1
        map( this.crearArreglo ) // OPCIÓN #2, SE PASA POR PARÁMETRO EL PRIMER ELEMENTO DEL MAP
      );
  }

  private crearArreglo(heroesObj: object) {
    const heroes: HeroeModel[] = [];
    console.log( heroesObj );

    if (heroesObj === null) { return []; }

    Object.keys (heroesObj).forEach(key => {
      console.log('Iterando: ', key);
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;
  }
}
