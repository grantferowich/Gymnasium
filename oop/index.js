// 4 Pillars of Object Oriented Programming
// 	Encapsulation
// 	Abstraction
// 	Inheritance
// 	Polymorphism

// FROM procedural programming (spaghetti code) -> OOP

// What is encapsulation?
// 1 Variables - properties of an Object
// 	2 Functions - methods of an Object
// 	3 Fewer parameters in functions thanks to OOP
// 	4 group relatedness together to reduce complexity

// What is abstraction?
// 	Hide some properties (private methods) and metas from the outside
// 	Simplify interface of Object
// 	Reduce the impact of changing code

// What is inheritance?
// 	Kill redundant code

// What is polymorphism?
// 	Poly - many; morph - form
// 	Refactor ugly switch case statements

// Member functions of a class are methods. A property holds values, while a method defines some logic.

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   }
// };

// FACTORY FUNCTION
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = createCircle(1);

//factory functions return an object

// CONSTRUCTOR FUNCTION
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const another = new Circle(1);
// every object has a constructor function
