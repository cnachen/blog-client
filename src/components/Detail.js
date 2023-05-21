import { Card } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";
import { useState, useEffect } from "react";

export default function Detail({ postId }) {
  const [post, setPost] = useState({
    id: postId,
    title: "",
    content: "",
    date: "",
    is_private: null,
  });

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = () => {
    fetch("/api/posts/get", {
      method: "POST",
      body: JSON.stringify({
        id: postId,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const postStyle = {
    // textAlign: "left",
    margin: "10px 10px 10px 10px",
  };

  return (
    <Card hoverable title={post.title} style={postStyle}>
      <ReactMarkdown className="markdown-body" remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </Card>
  );
}
