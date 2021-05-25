import React from 'react';
import { Swiper, SwiperSlide } from 'framework7-react';

const HomeSlide = ({ slides }) => {
  return (
    <Swiper className="h-1/3" pagination={{ clickable: true }} autoplay speed={300}>
      {slides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="flex justify-center p-0">
            <img src={item} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default React.memo(HomeSlide);
