import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
export default function Slider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      modules={[Navigation, Autoplay]}
      loop="true"
      autoplay
      navigation
    >
      <SwiperSlide>
        <img src="../../../public/sliderone.jpg" className="w-100 object-fit-cover"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/slidertwo.jpg" className="w-100 object-fit-cover"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/sliderthree.jpg"className="w-100 object-fit-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
