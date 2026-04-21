 const page = async ( {params} ) => {
  const { username } = await params;

  return (
    <>
    <div>
      <h1>Usernames search</h1>
      <p>Users Id: {username}</p>
    </div>
</>
  );
}

export default page;