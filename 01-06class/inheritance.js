class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    showSpecie(){
        console.log('NaN');
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }

};

class Rabbit extends Animal{
    constructor(name,earLenghts){
        super(name);
        this.earLenghts = earLenghts;
    }
    showSpecie(){
        console.log('It is rabbit');
    }
    hide(){
        console.log(`${this.name} hide!`)
    }
    stop(){
        super.stop();
        setTimeout(() => {
            super.stop();
            this.hide();
        }, 1000);
    }
};

let rabbit = new Rabbit('Bunny',10);

rabbit.run(100);
rabbit.showSpecie();
rabbit.stop();