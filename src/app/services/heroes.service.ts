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
}