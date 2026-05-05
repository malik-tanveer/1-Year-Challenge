import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "60vh", padding: "20px" }}>
        <h1>Welcome to Home Page 🏠</h1>
        <p>This is the content section...</p>
      </main>
      <Footer />
    </div>
  );
}
