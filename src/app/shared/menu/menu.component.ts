import { Component } from '@angular/core';
interface menuitem{
  ruta:string;
  texto:string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles:[
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MenuComponent {
menu:menuitem[]=[
  
  {ruta:'/graficas/barra',texto:'Barras'},
  {ruta:'/graficas/barra-doble',texto:'Barras-Dobles'},
  {ruta:'/graficas/dona',texto:'Dona'}, 
  {ruta:'/graficas/dona-http',texto:'Dona-Http'},
]
}
