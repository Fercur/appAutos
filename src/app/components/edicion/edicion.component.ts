import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent {
constructor(private servicio:AutoService,private ruta:ActivatedRoute,private route:Router){}
id:any;
nombre:any;
marca:any;
modelo:any;
anio:any;
dueniosAnt:any;
ngOnInit(){
  this.ruta.params.subscribe(parametro=>{
    //console.log(parametro['idAuto'])
    this.servicio.getUAuto(parametro['idAuto']).subscribe(a=>{
      this.id=a.id
      this.nombre=a.nombre
      this.marca=a.marca
      this.modelo=a.modelo
      this.anio=a.anio
      this.dueniosAnt=a.dueniosAnt
    })
  })
}
editarAuto(auto:any){
  this.servicio.putAuto(auto.value).subscribe()
  this.route.navigate(['auto'])
}

}
