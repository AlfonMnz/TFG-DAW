import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../../services/peticiones.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ["../c-c-cuentas.component.css"]
})
export class AdduserComponent implements OnInit {
  private usuarios = [];
  private usuarios_normales = [];
  private supervisores = [];
  private editando = false;
  private creando = false;
  private email: any;
  private username: any;
  private password: any;
  private supervisor: any;
  editemail: any;
  editusername: any;
  editpassword: any;
  editsupervisor: any;
  editidUsuario: any;
  errorEditar = false;


  constructor(private peticion: PeticionesService, private router: Router) {
  }

  ngOnInit() {
    this.peticion.getAllUsers().subscribe(data => {
      this.usuarios = data.usuarios;

      for (let i = 0; i < data.usuarios.length; i++) {
        if (data.usuarios[i].supervisor == 1)
          this.supervisores.push(data.usuarios[i]);
        else
          this.usuarios_normales.push(data.usuarios[i])
      }
    })
  }

  changeCreando() {
    this.creando = true
  }

  newAccount() {

    this.peticion.registrar(this.email, this.password, this.username, null, this.supervisor).subscribe(data => {
      if (data.status == false) {
        this.errorEditar = true
      } else {
        this.editando = false;
        this.creando = false;
        this.supervisores = [];
        this.usuarios_normales = [];
        this.peticion.getAllUsers().subscribe(data => {

          this.usuarios = data.usuarios;
          for (let i = 0; i < data.usuarios.length; i++) {
            if (data.usuarios[i].supervisor == 1)
              this.supervisores.push(data.usuarios[i]);
            else
              this.usuarios_normales.push(data.usuarios[i])
          }
        })
      }
    })
  }

  editarUsuario(idUsuario) {
    this.peticion.editarUsuario(idUsuario).subscribe(data => {
      this.editemail = data.usuario.email
      this.editusername = data.usuario.nombreUsuario
      this.editpassword = data.usuario.password
      this.editidUsuario = idUsuario
      this.editsupervisor = data.usuario.supervisor
    })
  }

  editAccount() {
    this.peticion.editAccount(this.editsupervisor, this.editpassword, this.editusername, this.editemail, this.editidUsuario).subscribe(data => {

      if (data.status == true) {
        this.supervisores = [];
        this.usuarios_normales = [];
        this.peticion.getAllUsers().subscribe(data => {

          this.usuarios = data.usuarios;
          for (let i = 0; i < data.usuarios.length; i++) {
            if (data.usuarios[i].supervisor == 1)
              this.supervisores.push(data.usuarios[i]);
            else
              this.usuarios_normales.push(data.usuarios[i])
          }
        })
      } else {
        this.errorEditar = true
      }

    })
  }

}
