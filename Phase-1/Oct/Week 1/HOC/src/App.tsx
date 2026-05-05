import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import withLoadingAndError from "./hoc/withLoadingAndError";

// Wrap all components with HOC
const HomeWithLogic = withLoadingAndError(Home);
const AboutWithLogic = withLoadingAndError(About);
const ContactWithLogic = withLoadingAndError(Contact);

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>🌐 My Website</h1>

      <button onClick={() => setLoading(!loading)}>Toggle Loading</button>
      <button onClick={() => setError(error ? "" : "Something went wrong!")}>
        Toggle Error
      </button>

      <hr />

      <HomeWithLogic loading={loading} error={error} />
      <AboutWithLogic loading={loading} error={error} />
      <ContactWithLogic loading={loading} error={error} />
    </div>
  );
}

export default App;
