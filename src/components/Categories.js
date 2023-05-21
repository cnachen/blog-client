import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("/api/all/categories", {
      method: "POST",
      body: JSON.stringify({}),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setCategories(
          res.categories.map((val) => {
            return val.name;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {categories.map((category) => {
        return <h3>{category}</h3>;
      })}
    </div>
  );
}
