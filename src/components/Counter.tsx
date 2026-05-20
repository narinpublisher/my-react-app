// src/components/UserCard.tsx （お気に入りボタンを追加）
import useFavorite from "../hooks/useFavorite";
import { User } from "../types/types";
import styles from "./UserCard.module.css";

interface UserCardProps {
  user:           User;
  isHighlighted?: boolean;
  onClickEdit?:   (userId: number) => void;
}

function UserCard({ user, isHighlighted = false, onClickEdit }: UserCardProps) {
  // カスタムHookでお気に入り状態を管理
  const { isFavorite, toggleFavorite } = useFavorite(false);

  const handleEdit = () => {
    if (onClickEdit) onClickEdit(user.id);
  };

  return (
    <div className={isHighlighted ? `${styles.card} ${styles.highlighted}` : styles.card}>

      <div className={styles.header}>
        <h2 className={styles.name}>{user.name}</h2>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* お気に入りボタン：状態によってアイコンが変わる */}
          <button
            onClick={toggleFavorite}
            style={{
              background: "none", border: "none",
              fontSize: "22px",   cursor: "pointer",
            }}
            title={isFavorite ? "お気に入りから外す" : "お気に入りに追加"}
          >
            {isFavorite ? "STAR" : "star"}
          </button>
          {user.isAdmin && <span className={styles.adminBadge}>管理者</span>}
        </div>
      </div>

      <p className={styles.email}>{user.email}</p>
      {user.department && <p className={styles.department}>{user.department}</p>}
      {onClickEdit && <button onClick={handleEdit}>編集</button>}
    </div>
  );
}

export default UserCard;