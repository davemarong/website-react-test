import Blog_post_card_info from "./Blog_post_card_info";
export default function Blog_post_card() {
  const reversedBlogPostCardInfo = Blog_post_card_info.reverse();
  return (
    <>
      {reversedBlogPostCardInfo.map((item) => {
        return (
          <>
            <div class="blog_post_card">
              <p class="blog_post_card_item">{item.date}</p>
              <h2 class="blog_post_card_item">{item.header}</h2>
              <p class="blog_post_card_item">{item.description}</p>
            </div>
          </>
        );
      })}
    </>
  );
}
