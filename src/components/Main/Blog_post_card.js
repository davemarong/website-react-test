export default function Blog_post_card({ blog_card_info }) {
  const [first, second] = blog_card_info;
  const { name, id, header, date, description } = first;
  return (
    <div>
      <p>{date}</p>
      <h1>{header}</h1>
      <p>{description}</p>
    </div>
  );
}
