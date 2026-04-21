import React from 'react'

const page = ({ params }) => {
  return (
    <>
    <div>
      <h1>Blog Detail Page</h1>
      <p>ID: {params.id}</p>
    </div>
    </>
  )
}

export default page