import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  cargando: boolean = true;
  heroes: HeroeModel[] = [];
  constructor(private heroeServices: HeroesService) { }

  ngOnInit() {
    this.heroeServices.getHeroes().subscribe(response => {
      this.cargando = false;
      this.heroes = response;
    });
  }

}
