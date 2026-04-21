 const page = async ( {params} ) => {
  const { username } = await params;

  return (
    <>
    <div class="text-center pt-12">
      <h1 class="text-4xl font-bold">Usernames</h1>
      <p class="font-bold">Users Id: {username}</p>

      <p class="text-lg">This page is Awsome you navuagte a url at your choise but some restictions like localhost:3000/user/?

      </p>
    </div>
</>
  );
}

export default page;