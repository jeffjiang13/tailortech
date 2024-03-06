import Link from 'next/link'
import React from 'react'

type Props = {}

const Unauthorized = (props: Props) => {
  return (
    <div className="p-4 text-center h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl md:text-6xl">Unauthorized acccess!</h1>
      <p>Please contact support or your agency owner to get access</p>
      <Link
        href="/"
        className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 mt-6"
      >
        Back to home
      </Link>
    </div>
  )
}

export default Unauthorized
