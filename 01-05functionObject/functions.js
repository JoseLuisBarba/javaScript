function sumAll(...args) {
    let sum = 0;
    for (let arg of args)
        sum += arg;
    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());
console.log(counter());


function Counter() {
    let count = 0;
    this.up = function () {
        return ++count;
    }
    this.down = function () {
        return (count > 0)?  --count: count;
    }
}

counter = new Counter();
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());

let x = 1;

function fun(){
    console.log(x);
    
}

fun();


let arr = [1,2,3,4,5,6,7,8,9];



console.log(arr.filter((elemt) => elemt > 3 && elemt < 8 ));
console.log(arr.filter((elemt) => [1,2,3,7].indexOf(elemt) != -1 ));



let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

users.sort((a,b) => a.age > b.age ? 1 : -1);
console.log(users);











