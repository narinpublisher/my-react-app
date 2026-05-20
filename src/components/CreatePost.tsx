// 📁 src/components/CreatePost.tsx

import { useState } from "react";
import axios from "axios";

type CreatePostInput = {
  title: string;
  body: string;
};

function CreatePost() {
  const [input, setInput] = useState<CreatePostInput>({
    title: "",
    body: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!input.title.trim() || !input.body.trim()) {
      setError("タイトルと本文は必須です");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // ローディング確認用
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          ...input,
          userId: 1,
        }
      );

      setResult(`作成成功！ 投稿ID: ${response.data.id}`);

      setInput({
        title: "",
        body: "",
      });

    } catch {
      setError("投稿の作成に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "32px auto",
        padding: "24px",
        border: "1px solid #d0dde8",
        borderRadius: "10px",
        textAlign: "left",
      }}
    >
      <h2>新規投稿</h2>

      <label>タイトル</label>

      <input
        value={input.title}
        onChange={e =>
          setInput({
            ...input,
            title: e.target.value,
          })
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
        value={input.body}
        onChange={e =>
          setInput({
            ...input,
            body: e.target.value,
          })
        }
        rows={4}
        style={{
          display: "block",
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
        }}
      />

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
        {isLoading ? "送信中..." : "投稿する"}
      </button>

      {result && (
        <p
          style={{
            color: "#1E6B3C",
            marginTop: "12px",
          }}
        >
          {result}
        </p>
      )}

      {error && (
        <p
          style={{
            color: "#C0392B",
            marginTop: "12px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default CreatePost;