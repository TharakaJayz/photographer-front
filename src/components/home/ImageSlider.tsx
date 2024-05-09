
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  return (
    <div className="w-full m-0 ">
      <Swiper
      loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}

        speed={1500}
        
        
        modules={[Pagination,Autoplay]}
        className="mySwiper border w-full "
      >
        {images.map((singleImage) => (
          <SwiperSlide>
            {" "}
            <img
              src={singleImage}
              alt="image_slider"
              className="h-vh100 w-full object-cover object-center  sm_:h-vh50 md_:h-vh60 lg2_:h-vh80 lg_:h-vh80"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
