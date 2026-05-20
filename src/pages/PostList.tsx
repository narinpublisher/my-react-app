// 📁 src/pages/PostList.tsx

import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { Post } from "../schemas/postSchema";

function PostList() {

  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) {

    return (
      <p
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        読み込み中...
      </p>
    );
  }

  if (error) {

    return (
      <p
        style={{
          color: "#C0392B",
          padding: "24px",
        }}
      >
        {error}
      </p>
    );
  }

  if (!posts) return null;

  return (

    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "24px",
        textAlign: "left",
      }}
    >

      <h1
        style={{
          color: "#1F3864",
        }}
      >
        投稿一覧
      </h1>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >

        {posts.slice(0, 10).map(post => (

          <li
            key={post.id}
            style={{
              background: "#fff",
              border: "1px solid #d0dde8",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "12px",
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

            {/* 詳細ページリンク */}
            <Link
              to={`/posts/${post.id}`}
              style={{
                color: "#2E75B6",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              {post.title}
            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default PostList;