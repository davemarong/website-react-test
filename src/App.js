import React, { useState } from "react";
import Header from "./components/Header/Header";
import Blog_post_container from "./components/Main/Blog_post_container";
import Top_page from "./components/Top_page/Top_page";
import "./scss/app.scss";
export default function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <Header />
      <Top_page />
      <Blog_post_container keyword={keyword} setKeyword={setKeyword} />
    </div>
  );
}
