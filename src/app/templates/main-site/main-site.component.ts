import { Component, OnInit } from '@angular/core';
import {Pizza} from '../../molecules/Pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css']
})
export class MainSiteComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  pizzas: Pizza[] = [];
  activePizza = this.pizzaService.getPizza(0);

  ngOnInit(): void {
    this.pizzas = this.pizzaService.getPizzas();
    // this.activePizza = this.pizzaService.getPizza(0);
  }

  onActivePane(e: Pizza) {
    this.activePizza = e;
  }

}
