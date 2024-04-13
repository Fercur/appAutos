import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.component.html',
  styleUrls: ['./listados.component.css']
})
export class ListadosComponent {
constructor(private servicio:AutoService,private route:Router) {}
auto:any;
ngOnInit(){
  this.servicio.getAuto().subscribe(auto=>{
    this.auto=auto;
  })
}
borrar(id:any){
  this.servicio.deleteAuto(id).subscribe()
  this.route.navigate(['registro'])
}
}
