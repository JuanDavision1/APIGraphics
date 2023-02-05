import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {
 // Doughnut
 public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','other' ];
 public doughnutChartData: MultiDataSet = [ 
 
     [ 350, 450, 100,180 ],
 
 ]
public colors:Color[]=[
  {
    backgroundColor:['#FE5633','#E6332E','#FC3F8B','#E62ED3','#D233FE']
  }
]
 public doughnutChartType: ChartType = 'doughnut';


}
