import React from 'react'

const Del = (id) => {
    const handleDelete = (itemId, event) => {
    console.log(`Deleting item ${itemId}`);
    // event object is passed as the second argument if using bind
  };
  return (
    <>
    <button onClick={(event) => handleDelete(id, event)}>
      Delete Item
    </button>
    </>
  )
}

export default Del