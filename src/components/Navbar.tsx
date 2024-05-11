import  { useState } from 'react'
import amlilaLogo from "../assets/amelia_logo.png";
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [navSecLogic,setNavSecLogic] = useState<boolean>(false);
    return (
        <div className='  w-full   bg-navcolor  py-vh2   fixed top-0 left-0  z-40'>
            <div className=' w-full h-full flex items-center justify-between   lg_:flex-col'>
                <section className='flex justify-between lg_:w-full px-vw5 '>
                <img src={amlilaLogo} alt='amelia logo' className='w-vw10 min-w-px75' />
                <button className='  lg_:block hidden text-white text-2xl'  onClick={()=>{setNavSecLogic(!navSecLogic);  }}><IoMenu /></button>
                </section>

                <section className={`flex  items-center gap-vw3 text-white  transition-all duration-500 origin-top  lg_:w-full  lg_:flex-col scale-y-0 h-0 lg:scale-100 lg:pr-vw5 lg:h-auto lg_:opacity-0 lg_:gap-vh3 lg_:items-start ${navSecLogic &&('lg_:pt-vh5 lg_:pb-vh2 lg_:scale-y-100 lg_:h-vh56 lg_:opacity-100   ')}`}>
                    <NavLink  to="/" className={({ isActive }) =>
                        isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } >Home</NavLink>
                    <NavLink  className={({ isActive }) =>
                         isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    }  to="/about">About US</NavLink>
                    <NavLink className={({ isActive }) =>
                         isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } to="/service">Services</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } to="/portfolio">Portfolio</NavLink>
                    <NavLink className={({ isActive }) =>
                        isActive ? "text-primary font-semibold lg_:w-full lg_:text-left lg_:text-white lg_:bg-primary  lg_:pl-vw5 lg_:py-vh1  " : "text-white lg_:w-full lg_:text-left lg_:pl-vw5 lg_:py-vh1  "
                    } to="/contact">Contact Us</NavLink>
                    <button className='bg-transparent border border-white text-white font-semibold px-vw1 sm_:px-vw3 lg_:px-vw2 py-vh1 rounded  transition-all cursor-pointer hover:bg-primary hover:border-primary ml-vw5'   >Request a Quote</button>
                </section>
                
                
            </div>
        </div>
    )
}

export default Navbar
