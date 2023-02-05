import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private hppt: HttpClient) { }
  getdata(){
    return this.hppt.get(' http://localhost:3000/grafica');
  }
  getusuariosredesdonadata(){

    return this.getdata().pipe(
      delay(1500),
      map(data=>{
        const labels = Object.keys(data);
        const values = Object.values(data);
        return {labels,values}
      })
    )
  }
}
