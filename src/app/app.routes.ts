import { Routes } from '@angular/router';

import { HomeComponent } from './central/home/home.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { NosotrosComponent } from './ventanas/nosotros/nosotros.component';
import { AdminComponent } from './usuario/admin/admin.component';
import { LoginComponent } from './usuario/login/login.component';
import { LoginadminComponent } from './usuario/login/loginadmin/loginadmin.component';
import { NotifyComponent } from './ventanas/notify/notify.component';
import { ProductosComponent } from './ventanas/productos/productos.component';
import { ServiciosComponent } from './ventanas/servicios/servicios.component';
import { IngresoproductComponent } from './ventanasadmin/ingresoproduct/ingresoproduct.component';
import { InventarioComponent } from './ventanasadmin/inventario/inventario.component';
import { PersonaldoctoresComponent } from './ventanasadmin/personaldoctores/personaldoctores.component';
import { SalidaproductComponent } from './ventanasadmin/salidaproduct/salidaproduct.component';
import { AdquiridoproductComponent } from './ventanasusuario/adquiridoproduct/adquiridoproduct.component';
import { HistorialmedicoComponent } from './ventanasusuario/historialmedico/historialmedico.component';
import { ProximacitaComponent } from './ventanasusuario/proximacita/proximacita.component';
import { ReservarcitaComponent } from './ventanasusuario/reservarcita/reservarcita.component';
import { RegisterComponent } from './usuario/register/register.component';


export const routes: Routes = [

  {path:'', component:HomeComponent},
  //ventanas
  {path: 'home', component: HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'notify', component:NotifyComponent},
  {path:'productos', component: ProductosComponent},
  {path:'servicios', component: ServiciosComponent},
  //perfiles de usuarios admin y usuario
  {path: 'perfil', component:PerfilComponent},
  {path:'admin', component: AdminComponent},
  //login
  {path: 'login', component: LoginComponent},
  {path: 'loginadmin', component: LoginadminComponent},
  {path: 'register', component: RegisterComponent},
  //ventanas de administrador
  {path: 'ingresoproduct', component:IngresoproductComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'personaldoctores', component: PersonaldoctoresComponent},
  {path: 'salidaproduct', component: SalidaproductComponent},
  //ventanas de usuario
  {path: 'adquiridoproduct', component: AdquiridoproductComponent},
  {path: 'historialmedico', component: HistorialmedicoComponent},
  {path: 'proximacita', component: ProximacitaComponent},
  {path: 'reservarcita', component: ReservarcitaComponent}


];
