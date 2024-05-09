import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Props {
    children:React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <div className='relative'>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
