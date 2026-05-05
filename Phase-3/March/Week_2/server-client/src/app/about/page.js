
import React from 'react'
import Counter from '@/component/Counter'

const page = () => {
    return (
        <>
            <div className="text-center">

                <h1 className="font-bold text-4xl">About Page</h1>

                <p className="text-lg">
                    This is a About Page of My Web app & Counter app
                </p>
                <div className="text-center font-bold mt-12">
                    <h1>Server Side Content</h1>
                    <Counter />
                </div>

            </div>

        </>
    )
}

export default page