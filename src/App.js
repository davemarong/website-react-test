import React from "react";
import Header from "./components/Header/Header";
import Blog_post_list from "./components/Main/Blog_post_list";
import Top_page from "./components/Top_page/Top_page";
import "./scss/app.scss";
export default function App() {
  // const blog_card_info = [
  //   {
  //     name: "s",
  //     id: "",
  //     header: "",
  //     date: "",
  //     decription: "",
  //   },
  //   {
  //     name: "ghgfgfh",
  //     id: "",
  //     header: "",
  //     date: "",
  //     decription: "",
  //   },
  // ];
  return (
    <div>
      <Header />
      <Blog_post_list />
      <Top_page />
    </div>
  );
}
