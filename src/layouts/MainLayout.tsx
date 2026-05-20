// 📁 src/layouts/MainLayout.tsx

import {
  Outlet,
  NavLink,
} from "react-router-dom";

function MainLayout() {
  return (
    <div>

      {/* ヘッダー */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "56px",
          background: "#1F3864",
          color: "#fff",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          PostApp
        </span>

        <nav
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <NavLink
            to="/posts"
            style={navStyle}
          >
            投稿一覧
          </NavLink>

          <NavLink
            to="/posts/new"
            style={navStyle}
          >
            新規作成
          </NavLink>
        </nav>
      </header>

      {/* メインエリア */}
      <main
        style={{
          minHeight: "calc(100vh - 56px)",
          background: "#f5f7fa",
          padding: "24px",
        }}
      >
        <Outlet />
      </main>

    </div>
  );
}

const navStyle = ({
  isActive,
}: {
  isActive: boolean;
}) => ({
  color: isActive
    ? "#D6E8F7"
    : "#ffffff",

  fontWeight: isActive
    ? "bold"
    : "normal",

  textDecoration: "none",
});

export default MainLayout;