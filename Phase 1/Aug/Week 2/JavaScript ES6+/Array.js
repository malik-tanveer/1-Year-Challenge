"use strict";

//  Array.js — ES6+ step by step, detailed examples


const section = (title) => {
  const line = "=".repeat(60);
  console.log(`\n${line}\n${title}\n${line}`);
};

// 1) Declaring arrays (const vs let)
section("1) Declaring arrays");

const fruits = ["apple", "banana", "mango"];
console.log("fruits:", fruits);

let numbers = [1, 2, 3]; // will change
numbers.push(4);
console.log("numbers after push:", numbers);

// WHY: use const if reference shouldn’t change, let if you will reassign.

// 2) Adding and removing — push, pop, shift, unshift
section("2) push, pop, shift, unshift");

let basket = [];
basket.push("apple"); // add at end
basket.push("mango");
console.log("after push:", basket);

let last = basket.pop(); // remove from end
console.log("popped:", last, "basket:", basket);

basket.unshift("banana"); // add at start
console.log("after unshift:", basket);

let first = basket.shift(); // remove from start
console.log("shifted:", first, "basket:", basket);

// 3) Array length and indexing
section("3) length and indexing");

const colors = ["red", "green", "blue"];
console.log("length:", colors.length);
console.log("first:", colors[0]);
console.log("last:", colors[colors.length - 1]);

// 4) Searching — indexOf, lastIndexOf, includes
section("4) Searching");

const langs = ["JS", "Python", "C++", "JS"];
console.log("indexOf JS:", langs.indexOf("JS"));
console.log("lastIndexOf JS:", langs.lastIndexOf("JS"));
console.log("includes Ruby:", langs.includes("Ruby"));

// 5) Iteration — for, for..of, forEach
section("5) Iteration");

console.log("classic for loop:");
for (let i = 0; i < langs.length; i++) {
  console.log(i, langs[i]);
}

console.log("for..of loop:");
for (const lang of langs) {
  console.log(lang);
}

console.log("forEach loop:");
langs.forEach((lang, index) => console.log(index, lang));

// 6) map — transform elements
section("6) map");

const prices = [100, 200, 300];
const withTax = prices.map((p) => Math.round(p * 1.1));
console.log("withTax:", withTax);

// 7) filter — select elements
section("7) filter");

const scores = [55, 80, 95, 40];
const passed = scores.filter((s) => s >= 50);
console.log("passed:", passed);

// 8) find & findIndex
section("8) find & findIndex");

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Omar" },
];
const user = users.find((u) => u.id === 2);
console.log("found user:", user);
const idx = users.findIndex((u) => u.name === "Omar");
console.log("Omar index:", idx);

// 9) some & every
section("9) some & every");

const marks = [80, 65, 90];
console.log("some < 50:", marks.some((m) => m < 50)); // false
console.log("every >= 50:", marks.every((m) => m >= 50)); // true

// 10) reduce — accumulate values
section("10) reduce");

const expenses = [1000, 2500, 800];
const total = expenses.reduce((sum, cur) => sum + cur, 0);
console.log("total:", total);

// 11) slice & splice
section("11) slice & splice");

const animals = ["cat", "dog", "elephant", "lion"];
console.log("slice 1-3:", animals.slice(1, 3)); // ["dog", "elephant"]

let spliceExample = ["a", "b", "c", "d"];
spliceExample.splice(1, 2, "X", "Y"); // remove 2 at index 1, insert X, Y
console.log("after splice:", spliceExample);

// 12) concat & join
section("12) concat & join");

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log("concat:", arr1.concat(arr2));

const words = ["Hello", "world"];
console.log("join with space:", words.join(" "));

// 13) reverse & sort
section("13) reverse & sort");

const nums = [3, 1, 4, 2];
nums.sort((a, b) => a - b); // ascending
console.log("sorted:", nums);
nums.reverse();
console.log("reversed:", nums);

// 14) flat & flatMap
section("14) flat & flatMap");

const nested = [1, [2, [3, 4]]];
console.log("flat(1):", nested.flat(1));
console.log("flat(2):", nested.flat(2));

const arrFlatMap = [1, 2, 3];
console.log("flatMap double:", arrFlatMap.flatMap((x) => [x, x * 2]));

// 15) spread & rest with arrays
section("15) spread & rest");

const combined = [...arr1, ...arr2];
console.log("spread combined:", combined);

function sumAll(...nums2) { // rest
  return nums2.reduce((s, n) => s + n, 0);
}
console.log("sumAll:", sumAll(1, 2, 3, 4));

// 16) destructuring arrays
section("16) destructuring");

const palette = ["red", "green", "blue", "yellow"];
const [primary, secondary, ...others] = palette;
console.log("primary:", primary, "secondary:", secondary, "others:", others);

// 17) Realistic example — Shopping cart
section("17) Shopping cart");

let cart = [];
cart.push({ id: 1, name: "T‑Shirt", price: 1200 });
cart.push({ id: 2, name: "Shoes", price: 3500 });
cart.unshift({ id: 3, name: "Cap", price: 800 });
console.log("cart after push/unshift:", cart);

const removed = cart.pop();
console.log("removed (pop):", removed);
const shifted = cart.shift();
console.log("removed (shift):", shifted);

console.log("names (map):", cart.map((i) => i.name));
console.log("expensive (filter >2000):", cart.filter((i) => i.price > 2000));
console.log("find Shoes:", cart.find((i) => i.name === "Shoes"));
console.log("total (reduce):", cart.reduce((sum, i) => sum + i.price, 0));

// 18) Practice tasks
section("18) Practice tasks");
console.log(`
1) Create an array of 5 cities. Use push, pop, shift, unshift to modify it.
2) Use indexOf to check if a city exists in the array.
3) Use slice to copy first 3 elements. Use splice to insert a new city at index 2.
4) Combine two arrays with concat and with spread. Compare.
5) Sort numbers descending, then reverse to ascending.
6) Use flatMap to duplicate each item in [1,2,3].
7) In the cart example, add two new products and recalc total.
`);

console.log("\nArray.js detailed complete");
