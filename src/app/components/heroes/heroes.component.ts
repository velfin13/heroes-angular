import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService , private _router:Router) {}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(id:number){
    this._router.navigate(['/heroe',id])
  }
}
