import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../services/peticiones.service";

@Component({
  selector: 'app-admincuenta',
  templateUrl: './admincuenta.component.html',
  styleUrls: ['./admincuenta.component.css']
})
export class AdmincuentaComponent implements OnInit {
  newmail: any
  newpassword = ""
  newusername: any
  errorNada = false

  constructor(private peticion: PeticionesService) {
  }

  ngOnInit() {
    this.newmail = this.peticion.usuario.email
    this.newusername = this.peticion.usuario.nombreUsuario
  }

  cambiarDatos() {
    if (this.newmail == this.peticion.usuario.email && this.newusername == this.peticion.usuario.nombreUsuario && this.newpassword == "") {
      this.errorNada = true
      return
    }
    this.peticion.changeUser(this.newmail, this.newusername, this.newpassword)
  }

}
