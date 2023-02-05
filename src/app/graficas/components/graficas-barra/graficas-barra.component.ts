import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas-barra',
  templateUrl: './graficas-barra.component.html',
  styleUrls: ['./graficas-barra.component.css']
})
export class GraficasBarraComponent {
  //recibe el valor con true
@Input() horizontal:boolean=false
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
//recibo los labels desde el compoenente padre
  @Input() barChartLabels: Label[] = [
    //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input()  barChartData: ChartDataSets[] = [
    { data: [ 0, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
    { data: [ 444, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
    { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
  ];

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType='horizontalBar'
    }
  }

 
}
