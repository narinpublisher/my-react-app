// 📁 src/pages/CreatePost.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  // リダイレクト関数
  const navigate = useNavigate();

  const handleSubmit = async () => {

    if (!title.trim() || !body.trim()) {
      setError("タイトルと本文は必須です");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {

      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: 1,
        }
      );

      // 成功 → 一覧へ移動
      navigate("/posts");

    } catch {

      setError("投稿の作成に失敗しました");

      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "32px auto",
        padding: "24px",
        background: "#ffffff",
        borderRadius: "10px",
        textAlign: "left",
      }}
    >
      <h1>新規投稿</h1>

      <label>タイトル</label>

      <input
        value={title}
        onChange={e =>
          setTitle(e.target.value)
        }
        style={{
          display: "block",
          width: "100%",
          padding: "8px",
          marginBottom: "12px",
        }}
      />

      <label>本文</label>

      <textarea
        value={body}
        onChange={e =>
          setBody(e.target.value)
        }
        rows={4}
        style={{
          display: "block",
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
        }}
      />

      {error && (
        <p
          style={{
            color: "#C0392B",
          }}
        >
          {error}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={{
          padding: "8px 24px",
          background: "#2E75B6",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {isLoading
          ? "送信中..."
          : "投稿する"}
      </button>

    </div>
  );
}

export default CreatePost;