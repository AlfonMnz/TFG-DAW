import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../../services/peticiones.service";
import moment = require("moment")

@Component({
  selector: 'app-nowflies',
  templateUrl: './nowflies.component.html',
  styleUrls: ['../../c-c-cuentas/c-c-cuentas.component.css']
})
export class NowfliesComponent implements OnInit {
  aerolineas: any[];
  aviones: any[];
  vuelos: any[];
  ticketsUsers: any[];
  vuelosUser = [];
  idsvuelos = [];
  private paco: any;

  constructor(private peticion: PeticionesService) {
  }

  ngOnInit() {

    this.getAllPlanes();
    this.getAllAerolineas();
    this.getAllFly();
  }

  private getAllPlanes() {
    this.aviones = [];
    this.peticion.getAllPlanes().subscribe(data => {
      this.aviones = data.aviones
    })
  }

  private getAllAerolineas() {
    this.aerolineas = [];
    this.peticion.getAllAerolineas().subscribe(data => {
      this.aerolineas = data.aerolineas
    })
  }

  private getAllFly() {
    this.vuelos = [];
    this.peticion.getAllVuelos().subscribe(data => {
      this.vuelos = data.vuelos
      this.getFlyUserNow();
    })
  }

  private getFlyUserNow() {
    var fecha = new Date();
    this.peticion.getTicketUsersNow(fecha).subscribe(data => {
      this.ticketsUsers = data.billetes;

      for (let ticket of this.ticketsUsers) {
        if (this.idsvuelos.indexOf(ticket.idVuelo) == -1) {

          for (let vuelo of this.vuelos) {
            if (vuelo.idVuelo == ticket.idVuelo && this.idsvuelos.indexOf(ticket.idVuelo) == -1) {
              this.idsvuelos.push(ticket.idVuelo);
              vuelo.HoraSalida = moment(vuelo.HoraSalida).format("DD [de] MM [de] YYYY")
              this.vuelosUser.push(vuelo)
            }
          }

        }
      }

    })
  }

  /*private getFlyUser() {
    this.ticketsUsers = [];
    this.peticion.getTicketUsers().subscribe(data => {
      let fecha = new Date();

      this.paco = data;
      this.paco = this.paco.billetes;
      for (let i = 0; i < this.paco.length; i++) {

        let fecha_salida = new Date(this.paco[i].fechaSalida);

        if (fecha_salida < fecha) {

          this.ticketsUsers.push(this.paco[i])
        } else {

        }
      }

    })
  }*/
}
