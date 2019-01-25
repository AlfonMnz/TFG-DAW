import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../../services/peticiones.service";

@Component({
  selector: 'app-adminaviones',
  templateUrl: './adminaviones.component.html',
  styleUrls: ['../c-c-cuentas.component.css']
})
export class AdminavionesComponent implements OnInit {
  private aviones = [];
  private aerolineas: any[];
  private vuelos: any[];
  private asientos: any;
  private idAerolineaSeleccionada: any;
  avionesporAerolineas = [];

  constructor(private peticion: PeticionesService) {
  }

  ngOnInit() {
    this.getAllPlanes();

    this.getAllFly();

  }

  private getAllPlanes() {
    this.aviones = [];
    this.peticion.getAllPlanes().subscribe(data => {
      this.aviones = data.aviones;
      this.getAllAerolineas();
    })
  }

  private getAllAerolineas() {
    this.aerolineas = [];
    this.peticion.getAllAerolineas().subscribe(data => {
      this.aerolineas = data.aerolineas;
      this.pintaravionesporAerolineas()
    })
  }

  private getAllFly() {
    this.vuelos = [];
    this.peticion.getAllVuelos().subscribe(data => {
      this.vuelos = data.vuelos
    })
  }

  crearAvion() {
    this.peticion.addNewPlane(this.idAerolineaSeleccionada, this.asientos).subscribe(datos => {
      this.getAllPlanes();
      this.getAllAerolineas();
      this.getAllFly()
    })
  }

  pintaravionesporAerolineas() {
    this.avionesporAerolineas = [];
    for (let i = 0; i < this.aerolineas.length; i++) {
      this.avionesporAerolineas[this.aerolineas[i].idAerolinea] = [];
      for (let j = 0; j < this.aviones.length; j++) {
         
        if (this.aviones[j].idAerolinea == this.aerolineas[i].idAerolinea) {
           
          this.avionesporAerolineas[this.aerolineas[i].idAerolinea].push(this.aviones[j])
        }
      }
    }
  }
}
