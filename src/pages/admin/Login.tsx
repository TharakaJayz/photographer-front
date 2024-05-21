import React from 'react'

interface Props {
    
}

const Login = (props: Props) => {
    return (
        <div className='w-full h-vh100 flex items-center justify-center '>

            <form className='px-vw3 py-vh3 flex flex-col items-center justify-center gap-vh3 border border-gray-600'>
                <section className='flex flex-col'>
                    <label htmlFor="" className='text-sm'>UserName</label>
                    <input type='text' placeholder='usename'  />
                </section>
                <section className='flex flex-col'>
                    <label htmlFor="" className='text-sm'>Password</label>
                    <input type='password'  />
                </section>

                <section className='w-full flex justify-end items-center'>

                <button className='w-p30 bg-gray-400 text-white' >Login</button>
                </section>
                
            </form>
            
        </div>
    )
}

export default Login
