const counterDisplay = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

let count = 0;

function updateCounter() {
  counterDisplay.textContent = count;

  if (count > 0) {
    counterDisplay.style.color = "green";
  } else if (count < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "black";
  }
}

// Event Listeners
increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

updateCounter();
