
const page = async ({ params }) => {

  const { id } = await params;
  return (
    <>
    <div>
      <h1>Blog Detail Page</h1>
      <p>ID: {id}</p>

      <p>

        Hello ia am a id and yor id is me not a tensuoin but tension is only me </p>
    </div>
    </>
  )
}

export default page;