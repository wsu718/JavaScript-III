/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: _this_ is the window or console Object. 
* 2. Implicit Binding: The most common application of _this_. _This_ is the object before the dot whenever a function is called with a preceding dot. 
* 3. Explicit Binding: _this_ is explicitly defined with .call, .apply, or bind. 
* 4. New Binding: _this_ points to the new object that is created by the new constructor.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function dog(){
  console.log(this.woof);
}

var woof = 'woof woof woof woof woof woof';

dog();

// Principle 2
// code example for Implicit Binding

let myDog = {
    name: 'P',
    bark: 'woof woof woof woof woof woof',
    dog: function(){
        console.log(this.bark);
    }
}

myDog.dog();

// Principle 3
// code example for New Binding

function Cat(purr){
  this.meow = purr;
}

let myCat = new Cat('Mmeoooowww');

console.log(myCat.meow); // function is being invoked


// Principle 4
// code example for Explicit Binding

function bird(){
  console.log(this.call);
}

let penguin = {
  name: 'Nilo',
  call: 'art arttt arrrrttt'
}

let loon = {
  name: 'Peeno',
  call: 'Squakkkkk!'
}

bird.call(penguin); //invoking the function here
bird.call(loon);