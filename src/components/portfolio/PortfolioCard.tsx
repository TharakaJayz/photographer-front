import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  title:string,
  desc:string
  imgUrl:string
}

const PortfolioCard = (props: Props) => {

  const navigation = useNavigate();
  return (
    <div className='w-p31 h-vh40 hover:cursor-pointer   lg_:w-p48  md_:w-full md_:h-vh50  ' onClick={()=>{navigation("/portfolio/test_Id")}}>
    <div className='w-full h-full flex flex-col justify-start gap-vh2'>
        <section className='capitalize'>
            <h3  >{props.title}</h3>
            <h1 className='text-xl font-semibold'>{props.desc}</h1>
        </section>
     <img src={props.imgUrl} alt="" className='w-full h-vh30 md_:h-vh40 object-cover object-top hover:scale-[0.99] transition-all duration-300 rounded-md' />
    </div>
     </div>
  )
}

export default PortfolioCard