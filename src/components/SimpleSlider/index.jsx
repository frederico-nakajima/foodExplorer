
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import luke from '../../assets/luke.jpg';
import ravi from '../../assets/ravi.jpg';
import samuel from '../../assets/samuel.jpg';
import wolfgang from '../../assets/wolfgang.jpg';
import {Container} from './styles'
import { Card } from '../../components/Card';


export function SimpleSlider(){
  return (

   <Container>
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
         <Card />
        </SwiperSlide>
        <SwiperSlide>
        <Card/>
        </SwiperSlide>
        <SwiperSlide>
        <Card/>
        </SwiperSlide>
        <SwiperSlide>
        <Card />
        </SwiperSlide>
      </Swiper>
    </div>
    </Container>
  );
};

export default SimpleSlider