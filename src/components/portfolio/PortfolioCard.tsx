import React from 'react'
import { images, images2 } from '../../assets/Images'
import { useNavigate } from 'react-router-dom'

type Props = {
  title:string,
  desc:string
  imgUrl:string
}

const PortfolioCard = (props: Props) => {

  const navigation = useNavigate();
  return (
    <div className='w-p31 h-vh40 hover:cursor-pointer ' onClick={()=>{navigation("/portfolio/test_Id")}}>
    <div className='w-full h-full flex flex-col justify-between'>
        <section className='capitalize'>
            <h3  >{props.title}</h3>
            <h1 className='text-xl font-semibold'>{props.desc}</h1>
        </section>
     <img src={props.imgUrl} alt="" className='w-full h-vh30 object-cover object-top hover:scale-[0.99] transition-all duration-300' />
    </div>
     </div>
  )
}

export default PortfolioCard