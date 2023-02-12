//  some literature: https://www.d.umn.edu/~gshute/softeng/object-oriented.html

//  4 Pillars of Object Oriented Programming
// 	Encapsulation
// 	Abstraction
// 	Inheritance
// 	Polymorphism

//  FROM procedural programming (spaghetti code) -> TO OOP
//  Better for larger applications with a lot of code

//  What is encapsulation?
//  Fields/attributes (data) and methods (functions) are bundled together
//  1 Variables - properties of an Object
// 	2 Functions - methods of an Object
// 	3 Fewer parameters in functions thanks to OOP
// 	4 group relatedness together to reduce complexity

// What is abstraction?
// 	Hide some properties (private methods) and metas from the outside
// 	Simplify interface of Object
// 	Reduce the impact of changing code

// What is inheritance?
// 	Kill redundant code
//  Ruby uses class-based inheritance, JavaScript uses Protypal Inheritance
//  A subclass in Ruby can inherit the methods of another class

// => Vehicle has methods A,B,C ----> Doesn't inherit anything
// => Car has methods D,E ----> Car acquires ABCDE via inheritance
// => Mustang has methods F ----> Mustang inherits to acquire ABCDEF

//Vehicle is the superclass of Car and Mustang
//Vehicle is the ancestor of Car and Mustang
//Car and Mustang are subclasses of Vehicle

// What is a singleton class?
// A class that can  only produce one object at a time. For example if you buy a license to use a software service, it will only extend one license per user.

// What is polymorphism?
// 	Poly - many; morph - form
// 	Refactor ugly switch case statements
// User.create and Portfolio.create both call on the "create" method, but "create" means something different in different contexts

// Member functions of a class are methods. A property holds values, while a method defines some logic.

// What is an abstract class?
// An abstract class is one that cannot be instantianted. A class can inherit methods from an abstract class however.

// What is namespacing in JavaScript?
// Namespacing is basically a global store for a bunch of variables and methods. One good use for a namespace is when you are rolling out different versions of an API, you can include the version number in the namespace to distinguish v1 from v2 etc.
// Namespacing helps prevent naming collisions, thus keeping the code more logically organized.

// What is the difference between an object and a class?
// A class is a blueprint for objects, while an object is an instance of a class.

//What is a plugin?
//A plug in is a piece of software that adds a specific piece of functionality to a web browser. I saw one programmer I follow make a plugin that erases all mentions of coronavirus from a page. There was a plugin that translated all mentions of Trump into  Drumpf.

// What is responsive design?
// A lot of people use different types of devices to access the web: iPhones, iPad, Android phone, desktop, etc. A browser like Chrome or Firefox will ask websites to be able to respond to different page sizes and orientations.
// Responsive design the the practice of making web applications fit a range of different user preferences. Technically, this means using a technology like flex boxes in CSS.

// What is W3C?
// There are a lot of people programming who all have different styles and ways of thinking about programming. The W3C, or World Wide Web Consortium, has the responsibility for standards setting.
// W3C will set standards on topics as responsive design, rendering web pages, XML, web architecture (uri and http).

// What is version control?
// When you are working on a piece of software and someone else is working on a piece of software, the best practice is to create a branch to work on. Then you and the person you work with will make changes to a "master" branch, and the master branch will keep track of the state of the software.

// Can you explain microservices archictecture?
// The idea behind microservices archictecture is to orgaize software processes around business use cases, and then optimize the tooling for each microservice. This can mean doing one part of your application with a node.js tech stack and another with a Ruby on Rails tech stack.
// Microservices helps with continuous integration by separating concerns into smaller pieces.

// What is a constructor?
// A constructor is a method used for initializing the state of an object or instance.

// What is new in HTML5?
// HTML5 supports new form attributes to better enable sending data from client to server.
// HTML5 also supports the section, video and audio tags.

//Why Smoothstack?
// I have spoken with a few SE's at Smoothstack who say that it's a great way to get the foot in the door and build experience.
// I am capable of building full-stack web applications, but I am hungry to expand my skillset and ultimately create a better life for myself.
// I have intrinsic desire to learn Java, so the fact that Smoothstack teaches this language in the training aligns with my goals.
// I am eager to build experience, there's nothing quite like experience.

// Primitives are copied by value || Objects are copied by reference
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   }
// };

// FACTORY FUNCTION
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }
// const circle = createCircle(1);

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
