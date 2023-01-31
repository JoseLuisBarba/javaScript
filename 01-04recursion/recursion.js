let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};


function sumSalaries(departament){
    if(Array.isArray(departament)){ //case 1
        return departament.reduce((prev,current)=> prev + current.salary,0);
    }
    else{ //case 2
        let sum = 0;
        for(let subDep of Object.values(departament)){ //recursively call for subdepartaments, sum the results
            sum += sumSalaries(subDep);
        }
        return sum;
    }  
}

console.log(sumSalaries(company));


// factorial

function factorial(n){
    return n === 1? n: n*factorial(n-1);
}

console.log(factorial(5));


function fibonacci(n){
    if (n === 1){
        return 1;
    }else if (n === 2){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2); 
    }
}
console.log(fibonacci(1));


let mylist = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


function lastList(list){
    if (list.next === null)
        return list.value;
    else
        return lastList(list.next);
}
console.log(lastList(mylist));


function printList(list){
    if (list != null){
       console.log(list.value);
       printList(list.next);
    }
}

function reverseList(list){
    if (list.next)
        reverseList(list.next);
    console.log(list.value);
}


printList(mylist);
reverseList(mylist);



