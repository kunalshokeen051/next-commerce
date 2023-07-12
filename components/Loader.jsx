import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Loader = () => {

  return (
    <div className='w-full h-[calc(100vh-80px)] flex justify-center bg-[#222] flex-col items-center'>
      <div class="container">
<div class="sound-wave">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
 </div>
    </div>
  )
}

export default Loader