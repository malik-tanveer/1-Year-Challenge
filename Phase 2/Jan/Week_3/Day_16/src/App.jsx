import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={styles.app}>
        {/* Navbar */}
        <nav style={styles.nav}>
          <h2 style={styles.logo}>MyApp</h2>
          <div>
            <Link style={styles.link} to="/">Home</Link>
            <Link style={styles.link} to="/about">About</Link>
            <Link style={styles.link} to="/contact">Contact</Link>
            <Link style={styles.link} to="/login">Login</Link>
            <Link style={styles.link} to="/signup">Signup</Link>
          </div>
        </nav>

        {/* Pages */}
        <div style={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

/* ---------- Pages ---------- */

const Home = () => (
  <div style={styles.card}>
    <h1>Welcome to MyApp 🚀</h1>
    <p>This is a simple React landing page with Router.</p>
  </div>
);

const About = () => (
  <div style={styles.card}>
    <h1>About Us</h1>
    <p>We build simple and clean React applications.</p>
  </div>
);

const Contact = () => (
  <div style={styles.card}>
    <h1>Contact</h1>
    <p>Email: support@myapp.com</p>
  </div>
);

const Login = () => (
  <div style={styles.card}>
    <h1>Login</h1>
    <input style={styles.input} placeholder="Email" />
    <input style={styles.input} type="password" placeholder="Password" />
    <button style={styles.button}>Login</button>
  </div>
);

const Signup = () => (
  <div style={styles.card}>
    <h1>Signup</h1>
    <input style={styles.input} placeholder="Name" />
    <input style={styles.input} placeholder="Email" />
    <input style={styles.input} type="password" placeholder="Password" />
    <button style={styles.button}>Create Account</button>
  </div>
);

/* ---------- Styles ---------- */

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    background: "#f4f6f8",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#111827",
  },
  logo: {
    color: "#fff",
  },
  link: {
    color: "#fff",
    marginLeft: "15px",
    textDecoration: "none",
    fontSize: "16px",
  },
  page: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    padding: "30px",
    width: "350px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
  },
};

export default App;
