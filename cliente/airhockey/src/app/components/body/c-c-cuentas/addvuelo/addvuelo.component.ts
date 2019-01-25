import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../../services/peticiones.service";
import moment = require("moment");

@Component({
  selector: 'app-addvuelo',
  templateUrl: './addvuelo.component.html',
  styleUrls: ["../c-c-cuentas.component.css"]
})
export class AddvueloComponent implements OnInit {

  private vuelos = [];
  private vuelosPasados = [];
  private vuelosPresentes = [];
  private eventos = [];
  private aviones = [];
  private avionesMostrando = [];
  private salida: any;
  private idAvionSeleccionado: any;
  private idAerolineaSeleccionada: any;
  private aerolineas: any;
  private asientos: any;
  private fecha_salida: any;
  private llegada: any;
  private fecha_llegada: any;
  precio: any;
  vuelosPendientes = [];
  vueloEditar: any;
  p = 1;

  constructor(private peticion: PeticionesService) {
  }

  ngOnInit() {
    this.peticion.getAllVuelos().subscribe(data => {
      this.vuelos = data.vuelos;
      this.pintarVuelos();
      this.getAllAviones();
      this.getAllAerolineas();

    })

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

  pintarVuelos() {
    let fecha = moment();
    for (let i = 0; i < this.vuelos.length; i++) {
      let la_fecha = moment(this.vuelos[i].HoraLlegada);
      if (la_fecha < fecha)
        this.vuelosPasados.push(this.vuelos[i]);
      else
        this.vuelosPresentes.push(this.vuelos[i])

    }
    this.pintarEventos();
    this.pintarPendientes()
  }

  pintarEventos() {
    let fecha = new Date();
    for (let i = 0; i < this.vuelos.length; i++) {
      let la_fecha_llegada = new Date(this.vuelos[i].HoraLlegada);
      let la_fecha_salida = new Date(this.vuelos[i].HoraSalida);
      if (la_fecha_llegada < fecha) {
        let evento = {
          salida: this.vuelos[i].Origen,
          destino: this.vuelos[i].Destino,
          fechaSalida: moment(this.vuelos[i].HoraSalida).format('DD [de] MM [de] YYYY'),
          fechaLlegada: moment(this.vuelos[i].HoraLlegada).format('DD [de] MM [de] YYYY'),
          claseSpam: "label label-danger",
          claseArrow: 'fa fa-arrow-down',
          evento: ' llegada'
        };
        this.eventos.push(evento)
      }
      if (la_fecha_salida < fecha) {
        let evento = {
          salida: this.vuelos[i].Origen,
          destino: this.vuelos[i].Destino,
          fechaSalida: moment(this.vuelos[i].HoraSalida).format('DD [de] MM [de] YYYY'),
          fechaLlegada: moment(this.vuelos[i].HoraLlegada).format('DD [de] MM [de] YYYY'),
          claseSpam: "label label-success",
          claseArrow: 'fa fa-arrow-up',
          evento: ' Salida'
        };
        this.eventos.push(evento)
      }


    }
  }

  cambiarAviones() {

    this.avionesMostrando = [];
    this.asientos = 0;
    for (let i = 0; i < this.aviones.length; i++) {
      if (this.aviones[i].idAerolinea == this.idAerolineaSeleccionada) {
        this.avionesMostrando.push(this.aviones[i])
      }
    }
  }

  pintarPendientes() {
    this.vuelosPendientes = [];
    let fecha = new Date();
    for (let vuelo of this.vuelos) {
      let la_fecha_llegada = new Date(vuelo.HoraLlegada);
      let la_fecha_salida = new Date(vuelo.HoraSalida);
      if (la_fecha_llegada > fecha && la_fecha_salida > fecha) {
        vuelo.HoraSalida = moment(vuelo.HoraSalida).format("DD [de] MM [de] YYYY");
        vuelo.HoraLlegada = moment(vuelo.HoraLlegada).format("DD [de] MM [de] YYYY");
        this.vuelosPendientes.push(vuelo)
      }
    }

  }

  cambiarAsientos() {
    this.asientos = 0;
    for (let i = 0; i < this.aviones.length; i++) {
      if (this.aviones[i].idAvion == this.idAvionSeleccionado) {
        this.asientos = this.aviones[i].Asientos;
        break
      }
    }
  }

  crearVuelo() {
    this.peticion.crearVuelo(this.idAerolineaSeleccionada, this.idAvionSeleccionado, this.asientos, this.salida, this.llegada, this.fecha_salida, this.fecha_llegada, this.precio).subscribe(data => {
      this.peticion.getAllVuelos().subscribe(data => {
        this.vuelosPasados = [];
        this.vuelosPresentes = [];
        this.aviones = [];
        this.aerolineas = [];
        this.eventos = [];
        this.vuelos = data.vuelos;
        this.pintarVuelos();
        this.getAllAviones();
        this.getAllAerolineas();

      })
    })
  }

  editarVuelo(idVuelo) {
    for (let vuelo of this.vuelos) {
      if (idVuelo == vuelo.idVuelo) {
        this.vueloEditar = vuelo;
        return
      }
    }
  }
}
