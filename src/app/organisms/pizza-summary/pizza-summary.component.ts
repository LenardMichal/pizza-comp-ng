import { Component, OnInit, Input } from '@angular/core';
import PizzaModel from 'src/app/atoms/PizzaModel';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-pizza-summary',
  templateUrl: './pizza-summary.component.html',
  styleUrls: ['./pizza-summary.component.css']
})
export class PizzaSummaryComponent implements OnInit {

  constructor(private pizzaService : PizzaService) { }
  // Lets encode all 
  pizzas: Array<PizzaModel> = [];

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
