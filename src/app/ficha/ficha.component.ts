import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaJugadorComponent implements OnInit {
  jugador: String = '';

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      const nombre = params.nombre.toString();

      if (nombre === 'oliver-atom') {
        this.jugador = 'El gran Oliver Atom';
      }

      if (nombre === 'benji-price') {
        this.jugador = 'El gran Arquero Benji Price';
      }
    });
  }
}
