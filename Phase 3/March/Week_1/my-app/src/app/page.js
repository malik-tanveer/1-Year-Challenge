'use client'

import { useRouter } from "next/navigation";

const page = () => {

const router = useRouter();

  return (
    <div class="text-center pt-10">

    <h1 class="font-bold text-4xl">Home</h1>
    <p class="text-lg mt-4 mb-4">
      This is the Home page of our Next.js application. Here you can find the latest updates, news, and featured content. We aim to provide valuable information and resources to our visitors. Stay tuned for more exciting content coming soon!
    </p>
    <button onClick={() => router.push("/about")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Go About and Learn Some of Our App.
    </button>

    </div>
  )
}

export default page;