import React from 'react'
import { useParams } from 'react-router-dom';
import HeaderSection from '../components/HeaderSection';
import { formatAlbumHandler2, formatAlbumHandler3, images, maneeshaNethupaAlbum } from '../assets/Images';


type Props = {}

const PortfolioSingle = (props: Props) => {

    let { albumId } = useParams();
    let count = 0;
    const album3 = formatAlbumHandler3(maneeshaNethupaAlbum);
    const album2 = formatAlbumHandler2(maneeshaNethupaAlbum);



    return (
        <div className='w-full'>
            <HeaderSection imgUrl={images[0]} title="About Us" desc="this is about us " TextLogic={true} />
            <div className='w-full px-vw5 bg'>
                <div className='w-full grid gap-4 grid-cols-3 lg2_:hidden '>
                    <div className=' flex flex-col gap-3'>
                        {album3.one.map((singleImg: any) => {
                            return <img src={singleImg} alt='tt' />

                        })}
                    </div>
                    <div className=' flex flex-col gap-3'>
                        {album3.two.map((singleImg: any) => {
                            return <img src={singleImg} alt='' />
                        })}
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        {album3.three.map((singleImg: any) => {
                            return <img src={singleImg} alt='' />
                        })}
                    </div>

                </div>
                <div className='w-full lg2_:grid gap-4 grid-cols-2 hidden sm_2:hidden '>
                    <div className=' flex flex-col gap-3'>
                        {album2.one.map((singleImg: any,) => {
                            return <img src={singleImg} alt='tt'  />

                        })}
                    </div>
                    <div className=' flex flex-col gap-3'>
                        {album2.two.map((singleImg: any) => {
                            return <img src={singleImg} alt='' />
                        })}
                    </div>
                </div>

                <div className='w-full flex-col gap-3 sm_2:flex hidden'>
                    {maneeshaNethupaAlbum.map((image)=>{
                        return <img src={image} alt=''  />
                    })}
                </div>

            </div>
        </div>
    )
}

export default PortfolioSingle