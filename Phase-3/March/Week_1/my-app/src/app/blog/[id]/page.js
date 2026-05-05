const page = async ({ params }) => {

  const { id } = await params;
  return (
    <>
      <h1 class="pt-12 font-bold text-4xl  text-center">Blog Id Search a URL and show is Now:</h1>
      <p class="font-bold text-center">ID: {id}</p>

<p class="text-lg text-center">This is a log Page and You search a Anyone in url after the url like localhost:3000/blog/?</p>
    </>
  )
}

export default page;