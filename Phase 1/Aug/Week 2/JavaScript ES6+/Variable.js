"use strict";

//  Variable.js — ES6+ variables (simple → advanced step by step)

const section = (title) => {
  const line = "=".repeat(60);
  console.log(`\n${line}\n${title}\n${line}`);
};

// 1) let — use when value can change
section("1) let (value can change)");

// Simple
let age = 18;
console.log("My age is:", age);

// Step up: value changes (like age increasing each year)
age = age + 1;
console.log("Next year age:", age);

// Bigger example: counting votes
let votes = 0;
votes = votes + 1; // person A votes
votes = votes + 1; // person B votes
console.log("Total votes:", votes); // -> 2

// 2) const — fixed value (cannot change reference)
section("2) const (fixed reference)");

// Simple
const country = "Pakistan";
console.log("Country:", country);

// Step up: useful for constants like Pi
const PI = 3.14;
console.log("Area of circle radius 5:", PI * 5 * 5);

// Bigger example: config that should not be reassigned
const config = { appName: "LearningApp", version: 1 };
console.log("Config:", config);

// We can CHANGE inner values (mutation)
config.version = 2;
console.log("Config after update:", config);

try {
  eval("config = {};"); // reassignment not allowed
} catch (e) {
  console.log("Cannot reassign const object →", e.name);
}

// 3) var — old way (avoid)
section("3) var (old, avoid)");

// Simple
var city = "Karachi";
console.log("City:", city);

// Redeclare (bad — can cause bugs)
var city = "Lahore";
console.log("City changed badly:", city);

// Bigger bug example: loop with var
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("var loop i:", i), 100);
}
// prints 4,4,4 because i leaks

// Fixed with let
for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log("let loop j:", j), 100);
}
// prints 1,2,3 correctly

// 4) Scope — where variables live
section("4) Scope (block vs function vs global)");

{
  let x = "inside block";
  console.log("x:", x);
}
try {
  console.log(x); // not visible outside
} catch (e) {
  console.log("x is hidden →", e.name);
}

function exampleScope() {
  let local = "inside function";
  console.log(local);
}
exampleScope();
try {
  console.log(local);
} catch (e) {
  console.log("local hidden outside function →", e.name);
}

// 5) Hoisting — var vs let/const
section("5) Hoisting");

console.log("var before declare:", hoistedVar); // undefined (hoisted)
var hoistedVar = "Now set";

try {
  console.log(hoistedLet); // TDZ ReferenceError
  let hoistedLet = "fail";
} catch (e) {
  console.log("let before declare →", e.name);
}

// 6) const with objects/arrays
section("6) const with objects/arrays");

const student = { name: "Ali", marks: [90] };
student.name = "Ali Khan"; // allowed
student.marks.push(85); // allowed
console.log("Student:", student);

try {
  eval("student = {};");
} catch (e) {
  console.log("Cannot reassign const →", e.name);
}

// 7) Destructuring — pick values easily
section("7) Destructuring");

const user = { id: 1, name: "Ayesha" };
const { id, name, role = "student" } = user;
console.log("id:", id, "name:", name, "role:", role);

const numbers = [10, 20, 30];
const [first, , third] = numbers;
console.log("first:", first, "third:", third);

// 8) Example project — Shopping cart variables
section("8) Example project: Shopping cart");

const storeName = "My Shop"; // const (never changes)
let cart = []; // let (cart can change)

function addItem(item, price) {
  cart.push({ item, price });
}

addItem("Book", 500);
addItem("Pen", 50);
console.log(storeName, "cart:", cart);

let total = 0;
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price;
}
console.log("Total price:", total);

// 9) Best practice summary
section("9) Best Practices");
console.log(`
- Use const by default (safe, prevents bugs)
- Use let only when you need to reassign
- Avoid var (old, confusing scope)
- Use block { } to keep variables local
- const objects/arrays can be changed inside, but not reassigned
`);

console.log("\nDone with Variable.js → Next file: Array.js");

// 10) Project: Mini Shop — simple → big (step by step, with WHY)
section("10) Project: Mini Shop — simple → big");

// WHY: Use const for values that never change, let for values that change.
const APP_NAME = "Mini Shop";
const TAX_RATE = 0.12; // 12%
const SHIPPING_FLAT = 250; // PKR
let subtotal = 0; // changes as we add items
console.log(`${APP_NAME} started. subtotal =`, subtotal);

// Step 1 — Add the first item (very simple)
section("Step 1 — First item (simple)");
const priceTShirt = 1200; // this price won't change → const
subtotal += priceTShirt; // running total → let
console.log("Added T‑Shirt:", priceTShirt, "subtotal:", subtotal);
// WHY: priceTShirt is a fixed label; subtotal is a changing value.

// Step 2 — Add another item but keep its scope small with a block
section("Step 2 — Second item in a small scope (block)");
{
  const priceShoes = 3500; // used only in this step
  subtotal += priceShoes;
  console.log("Added Shoes:", priceShoes, "subtotal:", subtotal);
}
try {
  // @ts-ignore
  console.log(priceShoes); // ReferenceError — priceShoes is block‑scoped
} catch (e) {
  console.log("outside block priceShoes ->", e.name);
}
// WHY: Keeping temporary values inside { } avoids naming clashes later.

// Step 3 — Apply a coupon (needs a variable that MAY change) 
section("Step 3 — Coupon");
const coupon = "SALE10"; // code is fixed
let discount = 0; // we will compute and then change this value
if (coupon === "SALE10") {
  discount = subtotal * 0.10; // 10% off
}
subtotal -= discount;
console.log("Applied coupon:", coupon, "discount:", Math.round(discount), "subtotal:", Math.round(subtotal));
// WHY: coupon doesn’t change → const; discount is computed → let.

// Step 4 — Shipping: show a 'var' gotcha and the 'let' fix
section("Step 4 — Shipping: var leak vs let fix");
if (subtotal < 5000) {
  var shipping = SHIPPING_FLAT; // ❌ var leaks outside the if-block
}
console.log("shipping with var (leaked):", shipping); // exists here — unexpected!

let shipping2; // ✅ declare once in outer scope using let
if (subtotal < 5000) {
  shipping2 = SHIPPING_FLAT; // assign conditionally
}
console.log("shipping2 with let (controlled):", shipping2 ?? 0);
// WHY: Prefer let to avoid accidental block leaks.

// Step 5 — Compute tax and grand total (const for derived values)
section("Step 5 — Totals");
const tax = Math.round(subtotal * TAX_RATE); // computed once: const
const grandTotal = Math.round(subtotal + tax + (shipping2 ?? 0));
console.log({ subtotal: Math.round(subtotal), tax, shipping: shipping2 ?? 0, grandTotal });
// WHY: Once we compute a final value, lock it with const to prevent accidental changes.

// Step 6 — Settings object: const allows mutation of properties, not reassignment
section("Step 6 — const with objects (mutation vs reassignment)");
const settings = { currency: "PKR", theme: { primary: "teal" }, freeShippingMin: 5000 };
settings.currency = "PKR"; // ✅ OK (property mutation)
settings.theme.primary = "indigo"; // ✅ OK (nested mutation)
console.log("settings after safe mutations:", settings);
try {
  // @ts-ignore
  eval("settings = {};"); // ❌ reassignment blocked
} catch (e) {
  console.log("reassigning const object ->", e.name);
}
// WHY: const freezes the *binding*, not the *contents*.

// Step 7 — Freeze for safety (shallow vs deep)
section("Step 7 — Freeze (shallow vs deep)");
const shallow = Object.freeze({ a: 1, nested: { b: 2 } });
try {
  shallow.a = 99; // ❌ top-level is frozen
} catch (e) {
  console.log("top-level change on frozen object ->", e.name);
}
shallow.nested.b = 999; // ✅ still changes (freeze is shallow)
console.log("shallow.nested.b after change:", shallow.nested.b);

const hardened = deepFreeze({ a: 1, nested: { b: 2 } }); // deepFreeze was defined above
try {
  hardened.nested.b = 777; // ❌ now blocked
} catch (e) {
  console.log("deep frozen nested change ->", e.name);
}
console.log("hardened.nested.b:", hardened.nested.b);
// WHY: Use deepFreeze for critical configs you never want to change at any level.

// Step 8 — TDZ (Temporal Dead Zone) in a realistic place
section("Step 8 — TDZ in action (don’t read before declare)");
try {
  // Simulate a bug: reading a variable before its let declaration
  eval("console.log(orderId); let orderId = 'ORD-1001'");
} catch (e) {
  console.log("TDZ example ->", e.name); // ReferenceError
}
// WHY: let/const exist in TDZ until the declaration line runs. Never access before declaring.

// Step 9 — Shadowing: inner variable hides outer safely
section("Step 9 — Shadowing (safe inner names)");
let status = "building"; // outer
{
  let status = "checkout"; // inner shadows outer
  console.log("inner status:", status);
}
console.log("outer status:", status);
// WHY: Reuse common names in small scopes without polluting outer scope.

// Step 10 — Quick recap for this mini project
section("Step 10 — Recap (WHY each choice)");
console.log(`
- const for constants and final computed values (tax, grandTotal).
- let for evolving values (subtotal, discount, shipping2).
- Avoid var — it leaked shipping outside the if-block.
- Use blocks { } to keep temporary names local (priceShoes, inner status).
- const objects can be mutated; freeze if you need real immutability (deepFreeze for nested).
- Beware TDZ: do not use variables before their declaration.
`);

section("Mini Shop — Final numbers");
console.log({ subtotal: Math.round(subtotal), tax, shipping: shipping2 ?? 0, grandTotal });

// Practice tasks (do it!)
section("Practice on this example");
console.log(`
1) Change TAX_RATE to 0.15 and see how totals change. Why did tax/grandTotal use const?
2) Make free shipping kick in at 5000: if subtotal >= settings.freeShippingMin, set shipping2 to 0.
3) Add a new block that adds a Hat for 800 PKR, print updated subtotal. Why keep price inside the block?
4) Try replacing let subtotal with const and observe the error. Why is let necessary here?
5) Freeze settings with deepFreeze and try changing settings.theme.primary again. What happens?
`);

console.log("Variable.js now includes a simple → big real example.");