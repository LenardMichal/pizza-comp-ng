import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Pizza} from '../../molecules/Pizza';
import { PizzaService } from 'src/app/pizza.service';
// import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-panes-collection',
  templateUrl: './panes-collection.component.html',
  styleUrls: ['./panes-collection.component.css']
})
export class PanesCollectionComponent implements OnInit {

  constructor(private pizzaService: PizzaService) { }
  @Input() panesCollection?: Pizza[];

  @Output() activePane = new EventEmitter();

  activeId = 0;

  ngOnInit(): void {
    
  }

  activationHandler(e: Pizza) {
    this.activePane.emit(e);
    // this.pizzaService.sortBy();
  }
 
  destroyPane(e: Pizza){
  }
}
