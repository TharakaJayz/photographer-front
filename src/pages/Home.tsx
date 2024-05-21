
import ImageSlider from '../components/home/ImageSlider'
import { images } from '../assets/Images'
import HomeMemory from '../components/home/HomeMemory'
import HomeService from '../components/home/HomeService'
import HomeSwiper from '../components/home/HomeSwiper'
import HomeReview from '../components/home/HomeReview'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <div className='w-full flex flex-col'>
            <ImageSlider  images={images} /> 
             <HomeMemory  />
             <HomeService />
             {/* <HomeSwiper/> */}
             {/* <HomeReview /> */}
        </div>
    )
}

export default Home

