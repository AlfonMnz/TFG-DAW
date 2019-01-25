import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../services/peticiones.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

  private email: any;
  private password: any;
  private fallo: boolean;

  constructor(private peticion: PeticionesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    if (this.peticion.logueado == true) {
      this.router.navigate(['home'])
    }
  }

  iniciarSesion() {
    this.peticion.login(this.email, this.password).subscribe(data => {
      if (data.status == true) {

        this.peticion.usuario = data.usuario;
        this.peticion.logueado = true;
        this.router.navigate(['home'])

      } else {
        this.fallo = true
      }
    })
  }

}
