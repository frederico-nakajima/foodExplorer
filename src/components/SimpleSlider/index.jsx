import React from 'react';
import { Container} from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SimpleSlider = () => {
  return (

   <Container>
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          Slide 1
        </SwiperSlide>
        <SwiperSlide>
          Slide 2
        </SwiperSlide>
        <SwiperSlide>
          Slide 3
        </SwiperSlide>
        <SwiperSlide>
          Slide 4
        </SwiperSlide>
      </Swiper>
    </div>
    </Container>  
  );
};

export default SimpleSlider;
