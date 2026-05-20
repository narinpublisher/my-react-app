//📁 src/components/PostList.tsx

import useFetch from "../hooks/useFetch";
import type { Post } from "../schemas/postSchema";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function PostList() {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<Post[]>(API_URL);

  if (isLoading) {
    return <p style={{ textAlign: "center" }}>読み込み中...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>投稿がありません</p>;
  }

  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      <h1 style={{ textAlign: "left" }}>投稿一覧</h1>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          textAlign: "left",
        }}
      >
        {posts.slice(0, 3).map(post => (
          <li
            key={post.id}
            style={{
              border: "1px solid #d0dde8",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "12px",
              background: "#fff",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#767676",
                margin: "0 0 4px",
              }}
            >
              投稿 #{post.id}
            </p>

            <h2
              style={{
                fontSize: "16px",
                margin: "0 0 8px",
                color: "#1F3864",
              }}
            >
              {post.title}
            </h2>

            <p
              style={{
                fontSize: "14px",
                color: "#404040",
                margin: 0,
                overflow: "hidden",
                maxHeight: "40px",
              }}
            >
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;