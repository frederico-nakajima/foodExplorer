
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from "react";
import {Container} from './styles'
import { Card } from '../../components/Card';


export function SimpleSlider(){
  const [slidesPerView, setSlidesPerViewt] = useState(1);

  useEffect(() => {
    function handleResize(){
      if(window.innerWidth < 4){
        setSlidesPerViewt(1);
      }else{
        setSlidesPerViewt(3);
      }
    }
    handleResize();

    window.addEventListener("resize",handleResize)

    return() =>{
      window.removeEventListener("resize",handleResize)
    }
  },[])

  return (

   <Container>
   
    <div >
      <h1 className='title'>Refeições</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        // pagination={{ clickable: true }}
        // navigation
        loop={true}
        // modules={[Navigation, Pagination]}
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