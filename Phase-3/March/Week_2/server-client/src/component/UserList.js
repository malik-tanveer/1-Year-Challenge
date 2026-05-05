'use client'

import React from 'react'

const UserList = ({ users }) => {
  return (
    <>
      <div>
        {users?.map((user) => {
          return (
            <div
              key={user._id}
              className="mx-24 bg-white shadow-md rounded-2xl p-5 mb-4 border d-flex border-gray-200 hover:shadow-lg transition"
            >

              <p className="text-lg font-bold text-gray-800 mb-1">
                User Id : {user._id}
              </p>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                User Name : {user.name}
              </h2>
              <p className="text-lg font-bold text-gray-800 mb-1">
                User __v : {user.__v}
              </p>

           
            </div>
          );
        })}
      </div>
    </>
  )
}

export default UserList;