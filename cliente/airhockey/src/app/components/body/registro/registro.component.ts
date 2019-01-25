import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../services/peticiones.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private email: string;
  private password: string;
  private username: string;
  private fallo: boolean;

  constructor(private peticion: PeticionesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  registrarUsuario() {

    this.peticion.registrar(this.email, this.password, this.username).subscribe(data => {
      if (data.status == false) {
        this.fallo = true
      } else {
        this.peticion.usuario = data.usuario;
        this.peticion.logueado = true;
        this.router.navigate(['home'])
      }
    })
  }

}
