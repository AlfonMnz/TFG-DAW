import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../services/peticiones.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import moment= require("moment")

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../c-c-cuentas/c-c-cuentas.component.css']
})
export class HomeComponent implements OnInit {
  vuelos: any;
  Salida: any;
  Destino: any;
  fecha_salida: any;
  fecha_llegada: any;
  vuelosBuscados: any | any[];
  busqueda = false;
  billetesDisponibles;
  billeteDispId = {};
  vueloViendo: any;
  viendoVuelo = false;
  billetesDisponiblesForFly = [];
  p = 1;
  numerosBilletes = [];
  numBilletes: any;
  errorBilletes = false;
  success = false;
  errorFecha = false;
  errorNoVuelos = false;

  constructor(private peticion: PeticionesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    if (this.peticion.logueado == false) {
      this.router.navigate(['/'])
    }
    this.getVuelos()
  }

  getVuelos() {
    var fecha = new Date();
    this.peticion.getAllVuelosNow(fecha).subscribe(vuelos => {
      this.vuelos = vuelos;

      this.vuelos = this.vuelos.vuelos;

    })
  }

  buscarVuelos() {
    var fecha = moment()
    var salida = moment(this.fecha_salida)
    if (fecha > salida) {
      this.errorFecha = true
      return

    }
    this.peticion.searchVuelos(this.Salida, this.Destino, this.fecha_salida).subscribe(vuelos => {
      this.vuelosBuscados = vuelos.vuelos
      if (this.vuelosBuscados.length == 0) {
        this.errorNoVuelos = true;

        return
      }
      this.busqueda = true
    })
    /*var fecha = moment();

    var salida = moment(this.fecha_salida);
    if (salida < fecha) {

      this.errorFecha = true;
      return
    }
    this.peticion.searchVuelos(this.Salida, this.Destino, this.fecha_salida).subscribe(vueles => {
      this.vuelosBuscados = vueles.vuelos;
      if (this.vuelosBuscados.length == 0) {
        this.errorNoVuelos = true;
        return
      }
      this.busqueda = true;
      this.billetesDisponibles = vueles;
      this.billetesDisponibles = this.billetesDisponibles.billetes[0];

      for (let i = 0; i < this.vuelosBuscados.length; i++) {

        if (!this.billeteDispId[this.vuelosBuscados[i].idVuelo]) {
          this.billeteDispId[this.vuelosBuscados[i].idVuelo] = []
        }
        for (let i = 0; i < this.billetesDisponibles.length - 1; i++) {
          if (this.billetesDisponibles[i].idVuelo == this.vuelosBuscados[i].idVuelo) {

            this.billeteDispId[this.vuelosBuscados[i].idVuelo].push(this.billetesDisponibles[i])
          }
        }
      }

    })*/
  }

  verVuelo(idVuelo) {

    this.numerosBilletes = [];
    this.vueloViendo = "";
    for (let vuelo of this.vuelos) {
      if (vuelo.idVuelo == idVuelo) {
        this.vueloViendo = vuelo;
        break
      }
    }
    this.peticion.getBilletesOfAFly(idVuelo).subscribe(datos => {
      this.billetesDisponiblesForFly = datos.billetes;


      this.viendoVuelo = true
    })


  }

  comprarBilletes() {
    this.errorBilletes = false;
    if (this.numBilletes > this.billetesDisponiblesForFly.length) {
      this.errorBilletes = true;
      return
    }

    this.peticion.buyFlies(this.vueloViendo.idVuelo).subscribe(data => {
      if (data.status == true) {
        this.success = true;
        this.verVuelo(this.vueloViendo.idVuelo)
      }
    })
  }
}
