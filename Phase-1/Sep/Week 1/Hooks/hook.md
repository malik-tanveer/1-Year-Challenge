
---

# 📌 React Main 11 Hooks (Detailed List)

### 1. **useState** – State Management

Component ke andar data (state) ko banane aur update karne ke liye.
Example: counter, form inputs, toggle buttons.

---

### 2. **useEffect** – Side Effects

Component render hone ke baad code chalane ke liye (API call, timers, subscriptions).
Example: data fetch karna, title update karna.

---

### 3. **useRef** – Reference / DOM Access

DOM elements ya mutable values ko directly access karne ke liye.
Example: input focus karna, previous value store karna.

---

### 4. **useContext** – Global State Sharing

Props drilling ke bina data ko global level par share karna.
Example: theme (dark/light), user authentication data.

---

### 5. **useReducer** – Advanced State Management

Complex state logic ko manage karne ke liye (Redux ka chhota version).
Example: todo list state, form multiple fields handle karna.

---

### 6. **useMemo** – Expensive Calculations Optimize

Heavy calculations ko cache karke performance improve karna.
Example: search filter, large list calculations.

---

### 7. **useCallback** – Function Memoization

Functions ko unnecessary re-creations se bachane ke liye.
Example: child component ko stable function pass karna.

---

### 8. **useLayoutEffect** – Sync with DOM

DOM update ke turant baad synchronous effect chalane ke liye.
Example: measure karna ki element ki width/height kitni hai.

---

### 9. **useImperativeHandle** – Custom Ref Handling

Parent ko apne child component ke andar se specific functions expose karne ke liye.
Example: custom input component jo `.focus()` method provide kare.

---

### 10. **useId** – Unique IDs Generate

Accessibility ya form ke andar unique IDs banane ke liye.
Example: label + input ke liye unique IDs.

---

### 11. **useTransition** – Concurrent UI Updates

Heavy UI update ko smooth banane ke liye.
Example: search bar ke andar typing ke sath smooth filtering.

---