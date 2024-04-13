import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http:HttpClient) { }
  private API_AUTO="http://localhost:3000/auto"
  //leer
  getAuto():Observable<any>{
    return this.http.get(this.API_AUTO)
  }
  //1 solo auto
  getUAuto(id:any):Observable<any>{
    return this.http.get(`${this.API_AUTO}/${id}`)
  }
  //Guardar
  postAuto(auto:any):Observable<any>{
    return this.http.post(this.API_AUTO,auto)
  }
  //editar
  putAuto(auto:any):Observable<any>{
    return this.http.put(`${this.API_AUTO}/${auto.id}`,auto)
  }
  //eliminar
  deleteAuto(id:any):Observable<any>{
    return this.http.delete(`${this.API_AUTO}/${id}`)
  }
}
