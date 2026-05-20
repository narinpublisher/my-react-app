// src/components/SearchBox.tsx
import { useEffect, useRef } from "react";

function SearchBox() {
  // input要素を参照するref
  const inputRef = useRef<HTMLInputElement>(null);

  // 初回表示時に自動フォーカス
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      style={{
        padding: "48px",
        textAlign: "center",
      }}
    >
      <h1>useRef サンプル</h1>

      <p style={{ color: "#666", marginBottom: "24px" }}>
        ページ表示時に自動でフォーカスされます
      </p>

      <input
        ref={inputRef}
        type="text"
        placeholder="検索キーワードを入力…"
        style={{
          width: "320px",
          padding: "12px",
          fontSize: "18px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}

export default SearchBox;