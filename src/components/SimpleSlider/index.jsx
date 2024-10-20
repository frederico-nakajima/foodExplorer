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
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [spaceBetween, setSpaceBetween] = useState(0);
  const [navigation, setNavigation] = useState(false);
  
  useEffect(() => {
    function handleResize(){
    const width = window.innerWidth;
      if (width < 425) {
        // Configurações para mobile (telas menores que 425px)
        setSlidesPerView(1);
        setSpaceBetween(0);
        setNavigation(false);
      } else if (width >= 425 && width < 1368) {
        // Configurações para tablets e telas intermediárias
        setSlidesPerView(2);
        setSpaceBetween(10);
        setNavigation(false);
      } else {
        // Configurações para desktop (telas maiores que 1368px)
        setSlidesPerView(3);
        setSpaceBetween(10);
        setNavigation(true);
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
   
    <div className='swiper' >
      <h1 className='title'>Refeições</h1>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        // pagination={{ clickable: true }}
        navigation={navigation}
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