import React from 'react'
import Wrapper from '@/components/Wrapper'
import { motion } from 'framer-motion'
import { fadeIn, slideRight } from '@/styles/Animations'
import { BiRotateLeft } from 'react-icons/bi'


const about = () => {
    return (
        <div className='w-full h-[calc(100vh-80px)] justify-center items-center gap-5 flex'>
            {/* left */}
            <motion.div className="h-[80%] p-2 w-1/3 flex justify-center items-center"
                initial={slideRight.hidden} animate={slideRight.visible} whileHover={slideRight.hover} >
                <img src="/aboutUs.jpg" alt="aboutUs IMAGE" className='h-full rounded-lg' />
            </motion.div>
            {/* right */}
            <motion.div className="w-2/3 px-10"
                initial={fadeIn.hidden} animate={fadeIn.visible} whileHover={fadeIn.hover}
            >
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus ipsum architecto, odio, recusandae quas incidunt inventore iste amet necessitatibus, placeat nemo nobis saepe et? Modi quis, exercitationem deleniti repellendus impedit dolore libero dignissimos repudiandae illo itaque ea ratione id, eos distinctio laboriosam, molestias tempora quae sed sit! Magnam repellendus eveniet, quo in explicabo inventore eligendi unde beatae esse modi. Modi similique exercitationem placeat dolor magnam cupiditate id maxime perferendis!</p>
                <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus ipsum architecto, odio, recusandae quas incidunt inventore iste amet necessitatibus, placeat nemo nobis saepe et? Modi quis, exercitationem deleniti repellendus impedit dolore libero dignissimos repudiandae illo itaque ea ratione id, eos distinctio laboriosam, molestias tempora quae sed sit! Magnam repellendus eveniet, quo in explicabo inventore eligendi unde beatae esse modi. Modi similique exercitationem placeat dolor magnam cupiditate id maxime perferendis!</p>
                <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus ipsum architecto, odio, recusandae quas incidunt inventore iste amet necessitatibus, placeat nemo nobis saepe et? Modi quis, exercitationem deleniti repellendus impedit dolore libero dignissimos repudiandae illo itaque ea ratione id, eos distinctio laboriosam, molestias tempora quae sed sit! Magnam repellendus eveniet, quo in explicabo inventore eligendi unde beatae esse modi. Modi similique exercitationem placeat dolor magnam cupiditate id maxime perferendis!</p>
                <motion.ul
                    initial={{ '--rotate': '0deg' } }
                    animate={{ '--rotate': '360deg' }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <li style={{ transform: 'rotate(var(--rotate))' }} />
                    <li style={{ transform: 'rotate(var(--rotate))' }} />
                    <li style={{ transform: 'rotate(var(--rotate))' }} />
                </motion.ul>
            </motion.div>
        </div>
    )
}

export default about