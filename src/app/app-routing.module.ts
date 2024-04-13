import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
  {path:'registro',component:RegistroComponent},
  {path:'detalle',component:DetalleComponent},
  {path:'detalle/:idAuto',component:DetalleComponent},
  {path:'',redirectTo:'registro',pathMatch:'full'},
  {path:'**',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
