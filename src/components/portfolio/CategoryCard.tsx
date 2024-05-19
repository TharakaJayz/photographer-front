import React from 'react'
import { GiBigDiamondRing } from "react-icons/gi";
interface Props {
    svg: any,
    title: string,
    desc: string,
    onClickAction: (value: string) => void
    selectedLogic?:boolean 
}

const CategoryCard = (props: Props) => {

    return (
        <div className={`w-p32 py-vh2 flex flex-col justify-between items-center gap-vh1  bg-primary_light1 rounded-xl hover:bg-primary ${props.selectedLogic && ('bg-primary')}    hover:text-white transition-all duration-500`} onClick={() => props.onClickAction(props.title)}>
            <span className='bg-service_svg_bg p-[8px] rounded-2xl flex items-center justify-center text-white'><GiBigDiamondRing /></span>
            <section>
                <h3 className='font-semibold w-full text-center'>{props.title}</h3>
                <p className='text-xs w-full text-center'>{props.desc}</p>
            </section>

        </div>
    )
}

export default CategoryCard
