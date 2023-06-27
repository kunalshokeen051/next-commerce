import React from 'react'
import Wrapper from '@/components/Wrapper'

const contact = () => {
    return (
        <div className='w-full h-[calc(100vh-82px)]'>
            <Wrapper className={'border-2 w-full my-4 mx-2 h-full rounded-md border-slate-500'}>
                <h1 className='m-4 text-7xl'>Contact Us</h1>
                <form action="">
                   <div className="flex gap-2">
                   <div name='name' className="w-1/2 h-fit border-2">
                         <h3>Name</h3>
                        <input type="text" name='name' className='border-2 border-rose-500 w-full' />
                    </div>
                    <div name='name' className="w-1/2 border-2">
                        <input type="text" name='name' />
                    </div>
                   </div>
                </form>
            </Wrapper>
        </div>
    )
}

export default contact