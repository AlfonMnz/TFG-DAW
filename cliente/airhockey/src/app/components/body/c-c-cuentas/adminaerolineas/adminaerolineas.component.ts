import {Component, OnInit} from '@angular/core';
import {PeticionesService} from "../../../../services/peticiones.service";

@Component({
  selector: 'app-adminaerolineas',
  templateUrl: './adminaerolineas.component.html',
  styleUrls: ['../c-c-cuentas.component.css']
})
export class AdminaerolineasComponent implements OnInit {
  private aviones: any[];
  private aerolineas: any[];
  private vuelos: any[];
  aerolineaAEditar: any;
  nombreAerolinea: any;
  nuevonombreAerolinea: any;

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
    })
  }

  crearAerolinea() {
    this.peticion.addNewAerolinea(this.nombreAerolinea).subscribe(data => {
       
      this.getAllPlanes();
      this.getAllAerolineas();
      this.getAllFly();
    })
  }

  editarAerolinea(idAerolinea) {
    this.aerolineaAEditar = "";
    for (let aerolinea of this.aerolineas) {
      if (aerolinea.idAerolinea == idAerolinea) {
        this.aerolineaAEditar = aerolinea;
        return
      }
    }
  }

  mandarEditarAerolinea() {
    this.peticion.updateAerolinea(this.aerolineaAEditar.idAerolinea, this.nuevonombreAerolinea).subscribe(data => {
      this.aerolineaAEditar = "";
      this.getAllAerolineas()
    })
  }
}
