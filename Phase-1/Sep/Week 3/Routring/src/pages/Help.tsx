import { Link, Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div>
      <h1>🆘 Help Page</h1>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="faq">FAQ</Link>
        <Link to="support">Support</Link>
      </nav>
      <Outlet /> {/* nested component render hoga yahan */}
    </div>
  );
}
