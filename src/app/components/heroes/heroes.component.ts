import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService:HeroesService) { 

  }

  ngOnInit(): void {
  }

}
