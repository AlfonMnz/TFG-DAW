import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../services/peticiones.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logueado = false;

  constructor(private peticion: PeticionesService, private router: Router) {
  }

  ngOnInit() {
  }

  cerrarSesion() {
    this.peticion.usuario = undefined;
    this.peticion.logueado = false;
    this.router.navigate([''])
  }


}
