// 📁 src/pages/PostDetail.tsx

import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { Post } from "../schemas/postSchema";

function PostDetail() {
  const { id } = useParams<{ id: string }>();

  const postId = Number(id);

  const {
    data: post,
    isLoading,
    error,
  } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (isLoading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!post) {
    return <p>投稿が見つかりませんでした</p>;
  }

  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "32px auto",
        padding: "24px",
        textAlign: "left",
      }}
    >
      <Link
        to="/posts"
        style={{
          color: "#2E75B6",
          display: "block",
          marginBottom: "16px",
          textDecoration: "none",
        }}
      >
        ← 投稿一覧に戻る
      </Link>

      <p
        style={{
          color: "#767676",
          fontSize: "13px",
        }}
      >
        投稿 #{post.id}
      </p>

      <h1
        style={{
          color: "#1F3864",
        }}
      >
        {post.title}
      </h1>

      <p
        style={{
          lineHeight: 1.8,
        }}
      >
        {post.body}
      </p>
    </div>
  );
}

export default PostDetail;