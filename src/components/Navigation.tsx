// 📁 src/components/Navigation.tsx

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        borderBottom: "1px solid #d0dde8",
      }}
    >
      <NavLink
        to="/posts"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "#2E75B6" : "#404040",
          textDecoration: "none",
        })}
      >
        投稿一覧
      </NavLink>

      <NavLink
        to="/posts/new"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "#2E75B6" : "#404040",
          textDecoration: "none",
        })}
      >
        新規作成
      </NavLink>
    </nav>
  );
}

export default Navigation;