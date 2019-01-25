import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../../services/peticiones.service";
import moment = require("moment")

@Component({
  selector: 'app-homecccuentas',
  templateUrl: './homecccuentas.component.html',
  styleUrls: ['../c-c-cuentas.component.css']
})
export class HomecccuentasComponent implements OnInit {
  aerolineas = [];
  aviones = [];
  usuarios = [];
  supervisores = [];
  usuarios_normales = [];
  vuelos = [];
  vuelosPasados = [];
  vuelosPresentes = [];

  constructor(private peticion: PeticionesService) {
  }

  ngOnInit() {
    this.getAllAerolineas();
    this.getAllAviones();
    this.getAllVuelos();
    this.getAllUsers()
  }

  getAllAerolineas() {
    this.peticion.getAllAerolineas().subscribe(data => {
       
      this.aerolineas = data.aerolineas
    })
  }

  getAllAviones() {
    this.peticion.getAllPlanes().subscribe(data => {
      this.aviones = data.aviones;
       
    })
  }

  getAllUsers() {
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

  getAllVuelos() {
    this.peticion.getAllVuelos().subscribe(data => {
      this.vuelos = data.vuelos;
       
      this.pintarVuelos()
    })
  }

  pintarVuelos() {
    let fecha = moment();
    for (let i = 0; i < this.vuelos.length; i++) {
      let la_fecha = moment(this.vuelos[i].HoraLlegada);
      if (la_fecha < fecha)
        this.vuelosPasados.push(this.vuelos[i]);
      else
        this.vuelosPresentes.push(this.vuelos[i])

    }
  }

}
