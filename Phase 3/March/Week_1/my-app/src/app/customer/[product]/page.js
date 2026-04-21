
const page = async ({ params }) => {

  const { product } = await params;
  return (
    <>
    <div class="text-center pt-12">
      <h1  class="font-bold text-4xl">Product </h1>
      <p class="font-bold pt-4">This Product Name & ID is : {product}</p>

<p class="text-lg pt-4">
    You see the all Products 
</p>

    </div>
    </>
  )
}

export default page;