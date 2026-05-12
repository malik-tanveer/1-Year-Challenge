// app/blog/page.js
import Link from 'next/link';

export default async function Blog() {
  const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
  const posts = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 italic">Our Archive</h1>
          <p className="text-gray-600">Explore all our stories, tutorials, and insights.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post._id} className="group">
              <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-52 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                  {post.title.charAt(0)}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3 mb-4 flex-1">
                    {post.content}
                  </p>
                  <div className="pt-4 border-t flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-500">By {post.author}</span>
                    <span className="text-blue-600">Read Article →</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
