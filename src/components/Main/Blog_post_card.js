import Blog_post_card_info from "./Blog_post_card_info";
export default function Blog_post_card() {
  return (
    <>
      {Blog_post_card_info.map((item) => {
        return (
          <>
            <p>{item.date}</p>
            <h1>{item.header}</h1>
            <p>{item.description}</p>
          </>
        );
      })}
    </>
  );
}
