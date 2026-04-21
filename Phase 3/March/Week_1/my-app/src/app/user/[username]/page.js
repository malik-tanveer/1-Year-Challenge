import React from 'react'

const page = ({ params }) => {
    return (
        <>
            <div>
                <h1>Usernames search</h1>

                <p> Users Id {params.username} </p>
            </div>
        </>
    )
}

export default page;