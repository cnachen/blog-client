import { useEffect, useState } from "react";

export default function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = () => {
    fetch("/api/all/tags", {
      method: "POST",
      body: JSON.stringify({}),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTags(
          res.tags.map((val) => {
            return val.name;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {tags.map((tag) => {
        return <h3>{tag}</h3>;
      })}
    </div>
  );
}
