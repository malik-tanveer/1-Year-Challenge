// DOM SELECTION EXAMPLES

// 1. Select by ID
const para1 = document.getElementById("para1");
console.log("By ID:", para1);

// 2. Select by Class
const para2 = document.getElementsByClassName("para2")[0];
console.log("By Class:", para2);

// 3. Select by Tag
const allParas = document.getElementsByTagName("p");
console.log("By Tag:", allParas);

// 4. Query Selector (first match)
const firstItem = document.querySelector(".item");
console.log("Query Selector (first .item):", firstItem);

// 5. Query Selector All
const allItems = document.querySelectorAll(".item");
console.log("Query Selector All:", allItems);

// EVENT EXAMPLES

// CLICK EVENT
const btn = document.getElementById("clickBtn");
btn.addEventListener("click", () => {
  alert("Button Clicked!");
  console.log("Click event triggered");
  para1.style.color = "red"; // Change paragraph color on click
});

// INPUT EVENT
const input = document.getElementById("nameInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.textContent = `Hello, ${input.value}`;
  console.log("Input event value:", input.value);
});
