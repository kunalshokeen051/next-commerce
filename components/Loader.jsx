import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import { NextFetchEvent } from 'next/server'

const Loader = () => { 
const [data, setData] = useState([])

useEffect(() => {
  fetch('/api/hello')
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
}, [])

  return (
    <div className="bg-white flex items-center justify-center w-full px-10 h-[calc(100vh-80px)]">
      <div className="w-fit flex flex-col gap-10 items-center justify-center">
      <h1 className='text-5xl animate-pulse'>Do You Know <span className='text-5xl'>?</span></h1>
        <h2 className='text-xl font-semibold'>
        {data.fact}
        </h2>
      </div>
    </div>
  )
}

export default Loader