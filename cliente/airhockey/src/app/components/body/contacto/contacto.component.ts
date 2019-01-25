import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PeticionesService} from "../../../services/peticiones.service";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  Asunto: any;
  textoMensaje: any;
  success = false;
  status: any;

  constructor(private peticion: PeticionesService) {
  }

  ngOnInit() {
  }

  enviarMensaje() {
    this.peticion.enviarMensaje(this.Asunto, this.textoMensaje).subscribe(data => {
       
      this.status = data
      this.status = this.status.status
       
      if (this.status == "true") {
         
        this.success = true
      }
    })
  }
}
