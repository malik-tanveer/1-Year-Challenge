"use strict";
/**
 * Function.js — ES6+ Functions with Classes, Objects, Arrays
 
 * Covers: simple, expression, arrow, anonymous, IIFE, default, rest,
 * object methods, class methods, higher-order functions.
 * Each step has WHY + return usage.
 */

const section = (title) => {
  const line = "=".repeat(60);
  console.log(`\n${line}\n${title}\n${line}`);
};

// 1) Simple Function Declaration
section("1) Simple Function Declaration");

// WHY: Clear and reusable. Always returns a value.
function add(a, b) {
  return a + b;
}

console.log("add(5, 3):", add(5, 3));

// 2) Function Expression
section("2) Function Expression");

// WHY: Store functions in variables, flexible for passing around.
const multiply = function (x, y) {
  return x * y;
};

console.log("multiply(4, 6):", multiply(4, 6));

// 3) Arrow Function
section("3) Arrow Function");

// WHY: Short syntax, especially with array methods.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((n) => n * n);
console.log("Squares:", squares);

// 4) Anonymous Function in Arrays
section("4) Anonymous Function");

// WHY: Handy for one-time callbacks.
const evenNumbers = numbers.filter(function (n) {
  return n % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// 5) IIFE (Immediately Invoked Function Expression)
section("5) IIFE");

// WHY: Creates a private scope and runs immediately.
const resultIIFE = (function (a, b) {
  return a - b;
})(10, 3);

console.log("IIFE result:", resultIIFE);

// 6) Default + Rest Parameters
section("6) Default + Rest Parameters");

// WHY: Default avoids undefined, Rest collects multiple args.
function greet(name = "Guest", ...hobbies) {
  return `Hello ${name}, Hobbies: ${hobbies.join(", ")}`;
}

console.log(greet("Talha", "Coding", "Cricket"));
console.log(greet());

// 7) Object Methods (Normal vs Arrow)
section("7) Object Methods");

const person_1 = {
  name: "Ali",
  normalMethod: function () {
    return `Normal: Hello, my name is ${this.name}`;
  },
  arrowMethod: () => {
    return `Arrow: Hello, my name is ${this.name}`;
  },
};

console.log(person_1.normalMethod()); // Works
console.log(person_1.arrowMethod()); // 'undefined', arrow has no 'this'

// 8) Class with Methods
section("8) Class with Methods");

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Normal method
  getInfo() {
    return `${this.name} scored ${this.marks}`;
  }

  // Arrow method as class property
  getGreeting = () => {
    return `Hello, I am ${this.name}`;
  };
}

const s1 = new Student("Hina", 95);
console.log(s1.getInfo());
console.log(s1.getGreeting());

// 9) Higher-Order Function
section("9) Higher-Order Function");

// WHY: A function that returns another function.
function power(exponent) {
  return function (base) {
    return base ** exponent;
  };
}

const square = power(2);
console.log("square(7):", square(7));

// 10) Mini Project: Shop Example (Functions + Objects + Classes + Arrays)
section("10) Mini Project: Shop Example");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `${this.name} - $${this.price}`;
  }
}

class Shop {
  constructor() {
    this.cart = [];
  }

  addProduct(product) {
    this.cart.push(product);
    return `${product.name} added to cart.`;
  }

  removeProduct(name) {
    this.cart = this.cart.filter((p) => p.name !== name);
    return `${name} removed from cart.`;
  }

  getTotal() {
    return this.cart.reduce((sum, p) => sum + p.price, 0);
  }

  checkout() {
    return `Total bill: $${this.getTotal()}`;
  }
}

const shop = new Shop();
console.log(shop.addProduct(new Product("Book", 15)));
console.log(shop.addProduct(new Product("Pen", 5)));
console.log(shop.addProduct(new Product("Laptop", 1000)));
console.log("Cart total:", shop.getTotal());
console.log(shop.removeProduct("Pen"));
console.log(shop.checkout());

// 11) Practice Tasks
section("11) Practice Tasks");

console.log(`
1) Make an arrow function that calculates factorial of a number.
2) Write an IIFE that prints current date.
3) Add a new method to Student class: getGrade() based on marks.
4) In Shop, write a function that applies 10% discount to all products.
5) Use a higher-order function to filter expensive products (> $500).
`);

console.log("\nFunction.js with ALL examples complete!");"use strict";
/**
 * Function.js — All function types + objects, classes, arrays, and return/this
 * Run with: node Function.js
 *
 * This file shows every common function style, explains WHY, and includes a
 * Mini Shop example that combines: class, object methods, array callbacks,
 * higher-order functions, and method chaining using `return this`.
 */

const section_1 = (title) => {
  const line = "=".repeat(60);
  console.log(`
${line}
${title}
${line}`);
};

// 1) Simple Function Declaration — returns a value
section_1("1) Simple function declaration (returns)");

// This is the classic function: defined with `function`, returns a value.
// WHY: Very readable and hoisted (can call before definition).
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Talha")); // -> "Hello Talha"

// 2) Function Expression — stored in a variable
section_1("2) Function expression");

// WHY: Useful when you want to create functions conditionally or pass them around.
const sayBye = function (name) {
  return `Goodbye ${name}`;
};
console.log(sayBye("Aisha"));

// 3) Arrow Function (concise) — returns implicitly when one-liner
section_1("3) Arrow functions (concise)");

// WHY: Shorter syntax. Good for inline callbacks and simple transforms.
const greetArrow = (name) => `Hello ${name} (arrow)`;
console.log(greetArrow("Sara"));

// 4) Anonymous function (used as callback) — often has no name
section_1("4) Anonymous callbacks");

const arr = [1, 2, 3];
// Anonymous function inside forEach — used once, no name needed.
arr.forEach(function (n) {
  console.log("anonymous callback value:", n);
});

// Using arrow anonymous callback (shorter):
const doubled = arr.map((n) => n * 2); // map returns a new array
console.log("doubled:", doubled);

// 5) IIFE — Immediately Invoked Function Expression (returns value)
section_1("5) IIFE (immediate result)");

// WHY: Use to create a temporary scope or compute a value immediately.
const randomId = (function () {
  const id = `id_${Math.floor(Math.random() * 1000)}`;
  return id; // returned immediately to randomId
})();
console.log("randomId:", randomId);

// 6) Default parameters & Rest parameters (returns computed values)
section_1("6) Default and Rest parameters (returns)");

// Default: prevents undefined when arg is missing
function welcome(user = "Guest") {
  return `Welcome, ${user}!`;
}
console.log(welcome());
console.log(welcome("Omar"));

// Rest: collect many args into an array
function sumAll(...numbers) {
  return numbers.reduce((s, n) => s + n, 0);
}
console.log("sumAll:", sumAll(5, 10, 15)); // returns 30

// Spread: expanding array into function args
const nums = [3, 7, 2];
console.log("Math.max with spread:", Math.max(...nums));

// 7) Object methods — normal vs arrow, and returning `this` for chaining
section_1("7) Object methods and `this` / return this");

const person = {
  name: "Ali",
  // Normal method: `this` refers to the object
  greet: function () {
    return `Hi ${this.name}`;
  },
  // Arrow method: `this` is lexical (not bound to object) — usually not what you want
  greetArrow: () => {
    return `Hi ${this.name}`; // this.name is undefined here
  },
};

console.log(person.greet()); // -> "Hi Ali"
console.log(person.greetArrow()); // -> "Hi undefined"

// Example: object that returns `this` to allow chaining
const counter = {
  value: 0,
  increment() {
    this.value += 1;
    return this; // return this allows chaining: counter.increment().increment()
  },
  add(n) {
    this.value += n;
    return this;
  },
  get() {
    return this.value; // final method returns data (not this)
  },
};

// Use chaining
const chainedValue = counter.increment().add(5).increment().get();
console.log("chained counter value:", chainedValue); // -> 7

// WHY: returning `this` is handy for fluent APIs (jQuery-style, builders, etc.).

// 8) Class with methods — constructor, normal methods, arrow methods (as properties)
section_1("8) Class example: Cart (methods, arrow properties, return this)");

class Cart {
  constructor(owner) {
    this.owner = owner;
    this.items = [];

    // Arrow method as a property (preserves `this` when passed around)
    this.printOwner = () => `Cart owner: ${this.owner}`;
  }

  // add item and return this for chaining
  add(item) {
    this.items.push(item);
    return this; // chaining
  }

  // remove by id and return this
  removeById(id) {
    this.items = this.items.filter((it) => it.id !== id);
    return this; // chaining
  }

  // compute total price (returns number)
  total() {
    return this.items.reduce((s, i) => s + i.price, 0);
  }

  // normal method using a callback to apply a transform and return a NEW array
  names() {
    return this.items.map(function (it) {
      return it.name; // normal function here is fine (no this needed)
    });
  }
}

// Use the class
const myCart = new Cart("Bilal");
myCart.add({ id: 1, name: "T-Shirt", price: 1200 })
  .add({ id: 2, name: "Shoes", price: 3500 })
  .add({ id: 3, name: "Cap", price: 800 }); // chaining

console.log(myCart.printOwner()); // arrow property method works
console.log("cart names:", myCart.names());
console.log("cart total:", myCart.total());

// Demonstrate remove chaining and re-total
myCart.removeById(2).add({ id: 4, name: "Mug", price: 300 });
console.log("cart after remove/add names:", myCart.names());
console.log("cart new total:", myCart.total());

// 9) Higher-order function — returns a function (closure)
section_1("9) Higher-order functions (returns function)");

// WHY: Useful to create specialized functions from a general one.
function makeDiscount(percent) {
  return function (price) {
    return Math.round(price * (1 - percent / 100));
  };
}

const tenPercent = makeDiscount(10);
console.log("price after 10% on 1000:", tenPercent(1000)); // -> 900

// Arrow version returning arrow function
const makeAdder = (a) => (b) => a + b;
const add10 = makeAdder(10);
console.log("add10(5):", add10(5)); // -> 15

// 10) Practical Mini Shop — combines class, arrays, functions, and return this
section_1("10) Practical Mini Shop (Class + Arrays + Functions)");

// helper pure functions
const TAX = 0.12;
const calcTax = (subtotal) => Math.round(subtotal * TAX);
const shippingRule = (subtotal) => (subtotal >= 5000 ? 0 : 250);

// create a specialized discount using higher-order function
const coupon10 = makeDiscount(10);

// Use the Cart class from above to build the shop flow
const shop_1 = new Cart("Customer");
shop_1.add({ id: 11, name: "Shirt", price: 1200 })
shop_1.add({ id: 12, name: "Jeans", price: 2700 })
shop_1.add({ id: 13, name: "Sneakers", price: 4200 });

const subtotalShop = shop_1.total();
const discountApplied = coupon10(subtotalShop); // returns new subtotal
const tax = calcTax(discountApplied);
const shippingCost = shippingRule(discountApplied);
const grandTotal = discountApplied + tax + shippingCost;

console.log({ subtotalShop, discountApplied, tax, shippingCost, grandTotal });

// Demonstrate using array callbacks with functions that return values
const expensiveItems = shop_1.items.filter((i) => i.price > 2000).map((i) => i.name);
console.log("expensive items:", expensiveItems);

// 11) IIFE for encapsulated counter with returned API (module pattern)
section_1("11) IIFE module (returns an API object)");

const CounterModule = (function () {
  let count = 0; // private
  return {
    inc() {
      count += 1;
      return count; // returns current count
    },
    dec() {
      count -= 1;
      return count;
    },
    get() {
      return count;
    },
  };
})();

console.log("CounterModule inc:", CounterModule.inc());
console.log("CounterModule get:", CounterModule.get());

// 12) Summary of WHEN to use which function style
section_1("12) Summary — WHEN to use each style (WHY)");

console.log(`
- function declaration: readable, hoisted, good for top-level reusable functions.
- function expression: when you need conditional assignment or closures.
- arrow functions: concise, good for callbacks and small transforms; no own \`this\`.
- anonymous callbacks: used inline once (e.g., map, forEach).
- IIFE / module pattern: encapsulate private state and return an API.
- object methods / class methods: use normal functions for methods (so \`this\` works); return \`this\` for chaining.
- higher-order functions: create specialized functions (e.g., discounts, adders).
`);

// 13) Practice tasks
section_1("13) Practice tasks");

console.log(`
1) Convert the makeDiscount to an arrow-only version.
2) Add a method ` + "applyCoupon(cfn)" + ` to Cart that applies a coupon function to subtotal and stores the discounted subtotal on the cart.
3) Create a Builder class that uses chaining (return this) to set owner, add items, set coupon, then build() returns the final order object.
4) Rewrite the names() method of Cart to use an arrow callback and confirm it still works.
5) Write tests: assert that chaining returns the same object (===) and totals compute correctly.
`);
