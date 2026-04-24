'use client'

import React from 'react'

const UserList = ({ users }) => {
  return (
    <>
      <div>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-2xl p-5 mb-4 border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {user.name}
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {user.username}
              </p>

              <p className="text-gray-700">
                {user.email}
              </p>

              <p className="text-gray-700">
                {user.phone}
              </p>

              <p className="text-blue-600">
                {user.website}
              </p>

              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-800">
                  {user.company.name}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {user.company.catchPhrase}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default UserList;