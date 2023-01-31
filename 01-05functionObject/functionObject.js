function ask(question, ...handlers) {
    let isYes = confirm(question);
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  }
ask("Question?", () => alert('You said yes'), result => alert(result));

function f1(a) {}
function f2(a, b) {}
function many(a, b, c, ...more) {}


console.log(f1.name); // return name of function
console.log(many.length);  // return number of parameters