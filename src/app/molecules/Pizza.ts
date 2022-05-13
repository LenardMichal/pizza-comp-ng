import PizzaModel from "../atoms/PizzaModel";

export class Pizza implements PizzaModel {
    
    price: number;
    quantity: number;;
    size: number;
    pizzaArea: number;
    totalArea: number;
    profitability: number;
    options: string[];

    constructor({price, size, quantity}: PizzaModel) {
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.pizzaArea = this.calcPizzaArea();
        this.totalArea = this.calcPizzaArea(this.quantity);
        this.profitability = this.calcProfitability();
        this.options = Object.keys(this);
    }

    private calcPizzaArea(quantity = 1){
        return (this.size / 2) *
        (this.size / 2) * Math.PI * quantity;
    }

    private calcProfitability() {
        return this.totalArea / this.price
    }

    recalcValues(){
        this.pizzaArea = this.calcPizzaArea();
        this.totalArea = this.calcPizzaArea(this.quantity);
        this.profitability = this.calcProfitability();   
    }
}

