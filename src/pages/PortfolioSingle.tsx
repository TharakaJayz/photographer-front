import React from 'react'
import { useParams } from 'react-router-dom';
import HeaderSection from '../components/HeaderSection';
import { images } from '../assets/Images';

type Props = {}

const PortfolioSingle = (props: Props) => {

    let { albumId } = useParams();
    console.log("this is album id", albumId)
    return (
        <div className='w-full'>
            <HeaderSection imgUrl={images[0]} title="About Us" desc="this is about us " TextLogic={true} />
        </div>
    )
}

export default PortfolioSingle