import Blog_post_card from "./Blog_post_card";
export default function Blog_post_list() {
  const blog_card_info = [
    {
      name: "s",
      id: "",
      header: "First post",
      date: "13 march",
      description: "This is really cool",
    },
    {
      name: "ghgfgfh",
      id: "",
      header: "",
      date: "",
      decription: "",
    },
  ];
  return (
    <div>
      <Blog_post_card blog_card_info={blog_card_info} />
    </div>
  );
}
