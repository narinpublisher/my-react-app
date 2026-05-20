// src/components/UserCard.tsx
import useFavorite from "../hooks/useFavorite";
import type { User } from "../types/types";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {

  // カスタムHookを利用
  const {
    isFavorite,
    toggleFavorite,
  } = useFavorite(false);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "24px",
        maxWidth: "420px",
        margin: "24px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{user.name}</h2>

        <button
          onClick={toggleFavorite}
          style={{
            border: "none",
            background: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
          title={
            isFavorite
              ? "お気に入りから外す"
              : "お気に入りに追加"
          }
        >
          {isFavorite ? "STAR" : "star"}
        </button>
      </div>

      <p>{user.email}</p>

      {user.department && (
        <p>{user.department}</p>
      )}

      {user.isAdmin && (
        <p
          style={{
            color: "white",
            background: "#3498db",
            display: "inline-block",
            padding: "4px 8px",
            borderRadius: "6px",
          }}
        >
          管理者
        </p>
      )}
    </div>
  );
}

export default UserCard;