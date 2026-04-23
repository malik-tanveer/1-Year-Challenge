import PostList from "@/component/PostList"

export default async function page() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=30");
    const posts = await res.json();

    return (
        <>
            <div className="mt-12 mb-12">
                <h1 className="font-bold text-4xl p-6 text-center">Post </h1>

                <PostList posts={posts} />

            </div>
        </>
    )
}