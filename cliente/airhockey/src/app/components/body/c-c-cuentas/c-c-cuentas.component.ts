import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../services/peticiones.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-c-c-cuentas',
  templateUrl: './c-c-cuentas.component.html',
  styleUrls: ['./c-c-cuentas.component.css']
})
export class CCCuentasComponent implements OnInit {

  constructor(private peticion: PeticionesService, private router: Router) {
  }

  ngOnInit() {

    if (this.peticion.logueado == false) {
      this.router.navigate(['/'])
    }
  }

}
