import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {PeticionesService} from "./services/peticiones.service";
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {RegistroComponent} from './components/body/registro/registro.component';
import {LogueoComponent} from './components/body/logueo/logueo.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import {HomeComponent} from './components/body/home/home.component';
import {ContactoComponent} from './components/body/contacto/contacto.component';
import {MyFlyComponent} from './components/body/my-fly/my-fly.component';
import {CCCuentasComponent} from './components/body/c-c-cuentas/c-c-cuentas.component';
import {AddvueloComponent} from './components/body/c-c-cuentas/addvuelo/addvuelo.component';
import {AdduserComponent} from './components/body/c-c-cuentas/adduser/adduser.component';
import {HomecccuentasComponent} from './components/body/c-c-cuentas/homecccuentas/homecccuentas.component';
import {AdminaerolineasComponent} from './components/body/c-c-cuentas/adminaerolineas/adminaerolineas.component';
import {AdminbilletesComponent} from './components/body/c-c-cuentas/adminbilletes/adminbilletes.component';
import {AdminavionesComponent} from './components/body/c-c-cuentas/adminaviones/adminaviones.component';
import {NowfliesComponent} from './components/body/my-fly/nowflies/nowflies.component';
import {PastfliesComponent} from './components/body/my-fly/pastflies/pastflies.component';
import {NgxPaginationModule} from "ngx-pagination";
import {AdmincuentaComponent} from './components/body/admincuenta/admincuenta.component';
import * as moment from 'moment'


const appRoutes: Routes = [
  {path: '', component: LogueoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'my-count', component: AdmincuentaComponent},
  {path: 'contacto', component: ContactoComponent},
  {
    path: 'misVuelos',
    component: MyFlyComponent,
    children: [
      {
        path: 'vuelosActuales',
        component: NowfliesComponent
      },
      {
        path: 'vuelosPasados',
        component: PastfliesComponent
      }
    ]
  },
  {
    path: 'C.C.Cuentas',
    component: CCCuentasComponent,
    children: [
      {
        path: 'home',
        component: HomecccuentasComponent
      },
      {
        path: 'usuarios',
        component: AdduserComponent
      },
      {
        path: 'vuelos',
        component: AddvueloComponent
      },
      {
        path: 'aerolineas',
        component: AdminaerolineasComponent
      },
      {
        path: 'billetes',
        component: AdminbilletesComponent
      },
      {
        path: 'aviones',
        component: AdminavionesComponent
      }
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RegistroComponent,
    LogueoComponent,
    HomeComponent,
    ContactoComponent,
    MyFlyComponent,
    CCCuentasComponent,
    AddvueloComponent,
    AdduserComponent,
    HomecccuentasComponent,
    AdminaerolineasComponent,
    AdminbilletesComponent,
    AdminavionesComponent,
    NowfliesComponent,
    PastfliesComponent,
    AdmincuentaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    )
  ],
  providers: [PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
