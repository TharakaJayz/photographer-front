import React from 'react'
import HeaderSection from '../components/HeaderSection'
import { images } from '../assets/Images';
import { FaPhone } from "react-icons/fa6";
interface Props {
    
}

const ContactUs = (props: Props) => {
    return (
        <div className='w-full'>
          <HeaderSection imgUrl={images[0]} title="Contact Us" desc="this is contact us " TextLogic = {true} />
          <div className='w-full px-vw5 bg'>
            <section className='w-full flex items-center justify-center'>
              <div className='w-p60 bg-green-500 flex flex-col gap-vh2 px-vw5 text-white'>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
                <div className='flex justify-start items-center gap-vw1 bg-yellow-300'>
                <FaPhone /> <span>+9471 873 6668</span>
                </div>
              </div>
            </section>
          </div>
        </div>
    )
}

export default ContactUs
