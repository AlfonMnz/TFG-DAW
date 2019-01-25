import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../../services/peticiones.service";

@Component({
  selector: 'app-pastflies',
  templateUrl: './pastflies.component.html',
  styleUrls: ['../../c-c-cuentas/c-c-cuentas.component.css']
})
export class PastfliesComponent implements OnInit {
  vuelos: any[];
  lastTicketsUsers: any;
  idsvuelos = [];
  vuelosUser = [];

  constructor(private peticion: PeticionesService) {
  }

  ngOnInit() {
    this.getFlyUserLast();
    this.getAllFly()
  }

  private getFlyUserLast() {
    var fecha = new Date();
    this.peticion.getFlyUserLast(fecha).subscribe(data => {
      this.lastTicketsUsers = data.billetes;
      for (let ticket of this.lastTicketsUsers) {
        if (this.idsvuelos.indexOf(ticket.idVuelo) == -1) {

          for (let vuelo of this.vuelos) {
            if (vuelo.idVuelo == ticket.idVuelo && this.idsvuelos.indexOf(ticket.idVuelo) == -1) {
              this.idsvuelos.push(ticket.idVuelo);
              this.vuelosUser.push(vuelo)
            }
          }

        }
      }
    })
  }

  private getAllFly() {
    this.vuelos = [];
    this.peticion.getAllVuelos().subscribe(data => {
      this.vuelos = data.vuelos
    })
  }

}
