import slider from '../../assets/img/CoxsBazar.jpg'
import slider2 from '../../assets/img/BokorNational.jpg'
import slider3 from '../../assets/img/CameronHighlands.jpg'
import slider4 from '../../assets/img/MekongDelta.jpg'
import slider5 from '../../assets/img/PhiPhiIslands.jpg'
import slider6 from '../../assets/img/Raja.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from 'swiper/modules'

const Banner = () => {
    return (
        <div className='overflow-hidden w-full'>
            <Swiper
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <img className='w-full overflow-hidden' src={slider} alt="" />
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide>
                    <img src={slider2} alt="" />
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider6} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;