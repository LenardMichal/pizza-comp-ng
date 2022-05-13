import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import {Pizza} from '../../molecules/Pizza';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }

  @Input() activePizza!: Pizza;

  ngOnInit(): void {
    this.activePizza = this.pizzaService.getPizza(0);
  }

  onSubmit(){
    // console.warn(this.pizzaForm.value);
  }

  onUpdate(){
    this.activePizza.recalcValues();
  }

  addNewPizza() {
    this.pizzaService.addPizza()
    }
}
