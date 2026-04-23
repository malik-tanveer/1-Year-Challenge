import React from 'react'

const PostList = ({ posts }) => {
  return (
    <>
    <div>
      {posts.map((post) => (
         <div
  key={post.id}
  className="bg-white shadow-md rounded-xl p-6 mb-6 border hover:shadow-lg transition duration-300"
>
  <h2 className="text-xl font-bold text-gray-800 mb-2">
    {post.title}
  </h2>

  <p className="text-gray-600 leading-relaxed">
    {post.body}
  </p>
</div>
      ))}
    </div>
      </>
  )
}

export default PostList