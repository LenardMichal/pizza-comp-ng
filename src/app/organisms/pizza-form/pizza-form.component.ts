import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {

  constructor() { }

  pizzaForm = new FormGroup({
    radius: new FormControl(10),
    price: new FormControl(100),
    quantity: new FormControl(1)
  })
  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.pizzaForm.value);
  }

}
