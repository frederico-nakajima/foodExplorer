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
export function Home(){
  return (

   <Container>
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
         <img src={luke} alt="" className='fotim' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={ravi} alt="" className='fotim' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={samuel} alt="" className='fotim'/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={wolfgang} alt="" className='fotim' />
        </SwiperSlide>
      </Swiper>
    </div>
    </Container>
  );
};

export default Home







        
                
                     
                
              

              
                