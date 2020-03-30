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
