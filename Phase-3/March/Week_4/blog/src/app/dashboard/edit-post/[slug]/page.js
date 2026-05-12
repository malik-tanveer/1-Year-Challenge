export default async function EditPost({ params }) {

  const { slug } = await params;

  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  const posts = await res.json();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>Edit Post</h1>

      <input defaultValue={post.title} />
      <textarea defaultValue={post.content} />

      <button>Update</button>
    </div>
  );
}