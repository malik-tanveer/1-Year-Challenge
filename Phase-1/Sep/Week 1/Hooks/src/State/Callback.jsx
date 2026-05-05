import { useState, useCallback, memo } from "react";

/* ---------------- Example 1: Counter ---------------- */
const ChildButton = memo(({ onClick }) => {
    console.log("ChildButton Rendered");
    return <button onClick={onClick}>Increase</button>;
});

/* ---------------- Example 2: Search ---------------- */
const SearchList = memo(({ items, onFilter }) => {
    console.log("SearchList Rendered");
    return (
        <ul>
            {items.filter(onFilter).map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
});

/* ---------------- Example 3: Todo ---------------- */
const TodoList = memo(({ todos, onRemove }) => {
    console.log("TodoList Rendered");
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}{" "}
                    <button onClick={() => onRemove(todo.id)}>❌</button>
                </li>
            ))}
        </ul>
    );
});

const CallbackExamples = () => {
    /* Example 1: Counter */
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(false);

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    /* Example 2: Search */
    const [query, setQuery] = useState("");
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes", "Strawberry",
        "Blueberry", "Watermelon", "Papaya", "Peach", "Pear", "Cherry", "Kiwi",
        "Pomegranate", "Guava", "Lychee", "Coconut", "Dragonfruit", "Avocado",

        // Vegetables
        "Potato", "Tomato", "Onion", "Garlic", "Cabbage", "Cauliflower", "Broccoli",
        "Spinach", "Carrot", "Radish", "Turnip", "Cucumber", "Capsicum", "Eggplant",
        "Pumpkin", "Ginger", "Peas", "Lettuce", "Sweet Potato", "Zucchini",

        // Animals
        "Lion", "Tiger", "Elephant", "Giraffe", "Monkey", "Zebra", "Kangaroo",
        "Panda", "Bear", "Wolf", "Fox", "Rabbit", "Deer", "Horse", "Camel",
        "Cheetah", "Leopard", "Crocodile", "Eagle", "Owl",

        // Human Names
        "Ahmed", "Ayesha", "Bilal", "Sara", "Usman", "Zain", "Fatima", "Ali",
        "Hina", "Omar", "Maryam", "Danish", "Hassan", "Noor", "Tariq",
        "Imran", "Iqra", "Shahid", "Kiran", "Sana",

        // Countries
        "Pakistan", "India", "China", "Japan", "USA", "Canada", "Brazil",
        "Argentina", "France", "Germany", "Italy", "Spain", "Australia", "New Zealand",
        "South Africa", "Russia", "Turkey", "Saudi Arabia", "UAE", "Egypt"];

    const filterItems = useCallback(
        (item) => item.toLowerCase().includes(query.toLowerCase()),
        [query]
    );

    /* Example 3: Todo */
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (task.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: task }]);
            setTask("");
        }
    };

    const removeTodo = useCallback(
        (id) => {
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        },
        [] // no dependency
    );

    return (
        <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
            <h1>useCallback Examples</h1>

            {/* Example 1 */}
            <section style={{ marginBottom: "40px" }}>
                <h2>1. Counter Example</h2>
                <h3>Count: {count}</h3>
                <ChildButton onClick={handleIncrement} />
                <button onClick={() => setOther(!other)}>
                    Toggle Other: {other.toString()}
                </button>
            </section>

            {/* Example 2 */}
            <section style={{ marginBottom: "40px" }}>
                <h2>2. Search Filter Example</h2>
                <input
                    type="text"
                    placeholder="Search fruit..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SearchList items={fruits} onFilter={filterItems} />
            </section>

            {/* Example 3 */}
            <section>
                <h2>3. Todo List Example</h2>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter task"
                />
                <button onClick={addTodo}>Add</button>
                <TodoList todos={todos} onRemove={removeTodo} />
            </section>
        </div>
    );
};

export default CallbackExamples;
