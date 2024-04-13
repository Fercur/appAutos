import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private servicio:AutoService,private route:Router){}
  id:any;
  nombre:any;
  marca:any;
  modelo:any;
  anio:any;
  dueniosAnt:any
  guardarAuto(auto:any){
    console.log(auto.value)
    this.servicio.postAuto(auto.value).subscribe()
    this.route.navigate(['personal'])
  }
}
