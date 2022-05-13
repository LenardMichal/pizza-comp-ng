import { Injectable } from '@angular/core';
// import PizzaModel from './atoms/PizzaModel';
import { mockPizzas } from './mockPizzas';
import { Pizza } from './molecules/Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  //Collect pizza Data
  pizzas: Pizza[] = mockPizzas;
  activePizzaId = 0;
  
  getPizzas() {
    return this.pizzas;
  }
  // Consider moving "if" into own check function
  getPizza(id : number) {
    if (this.pizzas.length > id && id >= 0) {
      return this.pizzas[id]
    }
    return new Pizza({price: 10, size: 10, quantity:1});
  }

  setPizza(id: number, payload: Pizza) {
    this.pizzas[id] = payload;
  }
  addPizza() {
    this.pizzas.push(new Pizza({
      size: 1,
      price: 1,
      quantity: 1
    }));
  }

  sortBy(option: SortOptions) {
    this.pizzas.sort((a,b) => {
      if (a[option] > b[option]) {
        return 1
      } 
      return -1;
      }
    )}
}

enum SortOptions {
  size= 'size',
  price = 'price',
  quantity= 'quantity',
  totalArea = 'totalArea',
  profitability = 'profitability'
}
 