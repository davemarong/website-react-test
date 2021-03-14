import React, { useState } from "react";
import Blog_post_card from "../Main/Blog_post_card";
import Search from "./Search";
export default function Searchbox() {
  const [keyword, setKeyword] = useState("");
  const handleChange = (inputValue) => {
    setKeyword(inputValue.target.value);
  };
  return (
    <div className="search">
      <input
        onChange={handleChange}
        id="searchbar"
        name="searchbar"
        type="text"
        value={keyword}
        placeholder="Search..."
      ></input>
      <button>Go</button>
    </div>
  );
}
