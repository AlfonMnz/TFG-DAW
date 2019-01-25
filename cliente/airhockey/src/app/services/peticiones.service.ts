import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import {HttpModule} from "@angular/http";

@Injectable()
export class PeticionesService {
  domain: string = 'http://localhost:3000';
  logueado = false;
  usuario = {idUsuario: "", email: '', nombreUsuario: '', supervisor: ""};

  /*logueado = false;
  usuario = null*/

  constructor(private http: HttpClient) {
  }

  login(email = '', password = ''): Observable<any> {
    var datos = {email: email, password: password};
    return this.http.post(this.domain + '/user/logueo', datos)
  }

  getAllVuelos(): Observable<any> {
    return this.http.get(this.domain + '/vuelo')
  }

  registrar(email = '', password = '', username = '', avatar = null, supervisor = null): Observable<any> {
    var datos = {email: email, password: password, username: username, avatar: avatar, supervisor: supervisor};
    return this.http.post(this.domain + '/user/registrar', datos)
  }

  getAllAerolineas(): Observable<any> {
    return this.http.get(this.domain + '/aerolinea/')
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.domain + '/user/')
  }

  getAllPlanes(): Observable<any> {
    return this.http.get(this.domain + '/avion/')
  }

  crearVuelo(idAerolinea = null, idAvion = null, asientos = null, salida = null, destino = null, fecha_salida = null, fecha_llegada = null, precio = 112): Observable<any> {
    var datos = {
      idAerolinea: idAerolinea,
      idAvion: idAvion,
      asientos: asientos,
      salida: salida,
      destino: destino,
      precio: precio,
      fecha_salida: fecha_salida,
      fecha_llegada: fecha_llegada
    };
    return this.http.post(this.domain + '/vuelo/addvuelo', datos)
  }

  addNewPlane(idAerolinea = null, asientos = null): Observable<any> {
    var datos = {
      idAerolinea: idAerolinea,
      asientos: asientos
    };
    return this.http.post(this.domain + '/avion/addavion', datos)
  }

  addNewAerolinea(nombreAerolinea = null): Observable<any> {
    var datos = {
      nombreAerolinea: nombreAerolinea
    };
    return this.http.post(this.domain + '/aerolinea/addaerolinea', datos)
  }

  updateAerolinea(idAerolinea, nuevonombreAerolinea): Observable<any> {
    var datos = {
      idAerolinea: idAerolinea,
      newname: nuevonombreAerolinea
    };
    return this.http.post(this.domain + '/aerolinea/updateaerolinea', datos)
  }

  getTicketUsers(): Observable<any> {
    var datos = {
      idUser: this.usuario.idUsuario
    };
    return this.http.post(this.domain + '/billete/user', datos)
  }

  enviarMensaje(Asunto: any, textoMensaje: any): Observable<any> {
    var datos = {
      asunto: Asunto,
      textoMensaje: textoMensaje,
      useremail: this.usuario.email
    };
    return this.http.post(this.domain + '/user/consulta', datos)
  }

  searchVuelos(Salida: any, Destino: any, fecha_salida: any): Observable<any> {
    var datos = {
      salida: Salida,
      destino: Destino,
      fecha_salida: fecha_salida,
    };
    return this.http.post(this.domain + '/vuelo/search', datos)
  }

  getAllVuelosNow(fecha: Date): Observable<any> {
    var datos = {
      fecha: fecha
    };
    return this.http.post(this.domain + '/vuelo/now', datos)
  }

  getBilletesOfAFly(idVuelo: any): Observable<any> {
    var datos = {
      idVuelo: idVuelo
    };
    return this.http.post(this.domain + '/billete/getFly', datos)
  }

  buyFlies(idVuelo: any): Observable<any> {
    var datos = {
      idVuelo: idVuelo,
      idUser: this.usuario.idUsuario,
      email: this.usuario.email
    };
    return this.http.post(this.domain + '/billete/buy', datos)
  }

  getTicketUsersNow(fecha: Date): Observable<any> {
    var datos = {
      fecha: fecha,
      idUsuario: this.usuario.idUsuario
    };
    return this.http.post(this.domain + '/billete/userNow', datos)
  }

  getFlyUserLast(fecha: Date): Observable<any> {
    var datos = {
      fecha: fecha,
      idUsuario: this.usuario.idUsuario
    };
    return this.http.post(this.domain + '/billete/userLast', datos)
  }

  changeUser(newmail: any, newusername: any, newpassword: string): Observable<any> {
    var datos = {
      newmail: newmail,
      newusername: newusername,
      newpassword: newpassword
    };
    return this.http.post(this.domain + '/billete/changeUser', datos)
  }

  editarUsuario(idUsuario: any): Observable<any> {
    var datos = {
      idUsuario: idUsuario
    };
    return this.http.post(this.domain + '/user/getOne', datos)
  }

  editAccount(editsupervisor: any, editpassword: any, editusername: any, editemail: any, editidUsuario: any): Observable<any> {
    var datos = {
      idUsuario: editidUsuario,
      username: editusername,
      email: editemail,
      password: editpassword,
      supervisor: editsupervisor
    }
    return this.http.post(this.domain + '/user/editar', datos)
  }
}
