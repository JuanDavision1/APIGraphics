import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent {

  // Doughnut
 public doughnutChartLabels: Label[] = [ 
 //'Download Sales', 'In-Store Sales', 'Mail-Order Sales','other' 
];
 public doughnutChartData: MultiDataSet = [ 
 
 //    [ 350, 450, 100,180 ],
 
 ]
public colors:Color[]=[
  {
    backgroundColor:['#FE5633','#E6332E','#FC3F8B','#E62ED3','#D233FE']
  }
]
 public doughnutChartType: ChartType = 'doughnut';


constructor(private serviciodonainfor:GraficasService){}

ngOnInit(): void {
//  this.serviciodonainfor.getdata().subscribe(data=>{
//   console.log(data)
//   const labels = Object.keys(data);
//   const values = Object.values(data);
//   this.doughnutChartLabels = labels
//   this.doughnutChartData.push(values)
//  })
  
// }
this.serviciodonainfor.getusuariosredesdonadata().subscribe(({labels,values})=>{
 this.doughnutChartLabels=labels,
this.doughnutChartData.push(values)})
}
}
