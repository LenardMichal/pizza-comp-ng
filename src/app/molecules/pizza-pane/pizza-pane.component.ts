import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../Pizza';

@Component({
  selector: 'app-pizza-pane',
  templateUrl: './pizza-pane.component.html',
  styleUrls: ['./pizza-pane.component.css']
})
export class PizzaPaneComponent implements OnInit {

  constructor() { }

  @Input() pizza!: Pizza;

  @Output() onActivePane = new EventEmitter();

  @Output() onDestroyPane = new EventEmitter();

  ngOnInit(): void {
  }

  activate() {
    this.onActivePane.emit(this.pizza);
  }

  destroy() {
    this.onDestroyPane.emit("DESTROY");
  }

  
}
