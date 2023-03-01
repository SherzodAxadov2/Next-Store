import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner from "../../assets/images/banner.png";
import './banne.css'

export default function Banner() {
    return (
        <div className="swvipper">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner} alt='banner' /></SwiperSlide>
                <SwiperSlide><img src={banner} alt='banner' /></SwiperSlide>
                <SwiperSlide><img src={banner} alt='banner' /></SwiperSlide>
            </Swiper>
        </div>
    );
}