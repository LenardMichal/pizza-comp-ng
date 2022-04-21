import { Component, OnInit, Input } from '@angular/core';
import PizzaModel from 'src/app/atoms/PizzaModel';

@Component({
  selector: 'app-pizza-summary',
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['./pizza-summary.component.css']
})
export class PizzaSummaryComponent implements OnInit {

  constructor() { }
  // Lets encode all 
  @Input() pizza : PizzaModel;

  ngOnInit(): void {
    
  }

}
