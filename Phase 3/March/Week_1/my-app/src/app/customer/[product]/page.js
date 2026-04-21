
const page = async ({ params }) => {

  const { product } = await params;
  return (
    <>
    <div>
      <h1>Product Page</h1>
      <p>This Product Name & ID is : {product}</p>
<p>
    You see the all Products 
</p>

    </div>
    </>
  )
}

export default page;