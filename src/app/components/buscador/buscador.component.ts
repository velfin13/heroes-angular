import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.heroes = this._heroeService.buscarHeroe(params['termino']);
      this.termino = params['termino'];
    });
  }
}
