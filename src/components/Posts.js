import { Card, Pagination } from "antd";
import { useState, useEffect } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css";

export default function Posts({ pageId }) {
  const [page, setPage] = useState(pageId ?? 1);
  const [postsCount, setPostsCount] = useState(0);
  const [posts, setPosts] = useState(
    [8, 9, 10, 11, 12].map((val) => ({
      id: val,
      title: "",
      content: "",
      date: "",
      is_private: null,
    }))
  );

  useEffect(() => {
    fetchPostsCount();
  }, []);

  useEffect(() => {
    fetchPosts(5, (page - 1) * 5);
  }, [page]);

  const onPageChanged = (page) => {
    setPage(page);
    // navigate(`/page/${page}`);
    // window.scrollTo(0, 0);
  };
  const pageRender = (current, type, originalElement) => {
    if (type === "page") {
      return <a href={`/page/${current}`}>{current}</a>;
    } else if (type === "prev") {
      return <a href={`/page/${page}`}>{"Prev"}</a>;
    } else if (type === "next") {
      return <a href={`/page/${page}`}>{"Next"}</a>;
    }
    return originalElement;
  };

  const fetchPosts = (limit, offset) => {
    fetch("/api/all/posts", {
      method: "POST",
      body: JSON.stringify({
        limit: limit,
        offset: offset,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.posts);
        console.log(res.posts);
      })
      .catch((err) => console.error(err));
  };

  const fetchPostsCount = () => {
    fetch("/api/posts/count", {
      method: "POST",
      body: JSON.stringify({}),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setPostsCount(res.count);
        console.log(res.count);
      })
      .catch((err) => console.error(err));
  };

  const postStyle = {
    textAlign: "left",
    margin: "10px 10px 10px 10px",
  };

  const paginationStyle = {
    textAlign: "center",
    margin: "10px 10px 10px 10px",
  };

  return (
    <>
      {posts.map((item) => {
        return (
          <a href={`/post/${item.id}`}>
            <Card hoverable title={item.title} style={postStyle}>
              <ReactMarkdown
                className="markdown-body"
                remarkPlugins={[remarkGfm]}
              >
                {item.content?.slice(0, 100)}
              </ReactMarkdown>
              <h5>{item.date}</h5>
            </Card>
          </a>
        );
      })}
      <Card hoverable style={paginationStyle}>
        <Pagination
          current={page}
          onChange={onPageChanged}
          itemRender={pageRender}
          total={postsCount}
          pageSize={5}
        />
      </Card>
    </>
  );
}
