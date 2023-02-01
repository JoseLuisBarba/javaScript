class CoffeeMachine{
    _waterAmount = 0;
    #waterLimit = 200;
    constructor(power){
        this._power = power;
    }
    /*only read*/
    get  power(){
        return this._power;
    }
    set waterAmount(value){
        this._waterAmount = this.#fixWaterLimit(value);
    }
    get waterAmount(){
        return this._waterAmount;
    }
    #fixWaterLimit(value){
        if( value < 0)
            value = 0;
        if (value > this.#waterLimit)
            return this.#waterLimit;
        return value;
    }

};

class SuperCoffeeMachine extends CoffeeMachine
{
    #durability = 15;
    constructor(power, durability){
        super(power);
        this.#durability = durability;
    }
    get durability(){
        return this.#durability;
    }

    
};

let coffee1 = new CoffeeMachine(100);
let super1 = new SuperCoffeeMachine(100,25);
coffee1.waterAmount = 230;
console.log(coffee1.waterAmount);
console.log(coffee1.power);
console.log(super1.durability);