const KEY = "myapp.username"; // use a unique key so you don't collide with other apps
const input = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const notice = document.getElementById("notice");

// When page loads, read localStorage and show value if present
window.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem(KEY);
  if (stored) {
    input.value = stored;
    notice.textContent = `Welcome back, ${stored}! (loaded from localStorage)`;
  } else {
    notice.textContent = `No name saved yet. Type your name and click Save.`;
  }
});

// Save button — store trimmed name
saveBtn.addEventListener("click", () => {
  const name = input.value.trim();
  if (!name) {
    alert("Please type a name before saving.");
    return;
  }
  localStorage.setItem(KEY, name);
  notice.textContent = `Saved! Hello, ${name} (stored in localStorage)`;
  console.log("Saved to localStorage:", name);
});

// Clear button — remove key from localStorage
clearBtn.addEventListener("click", () => {
  localStorage.removeItem(KEY);
  input.value = "";
  notice.textContent = "Cleared saved name from localStorage.";
  console.log("localStorage key removed:", KEY);
});
