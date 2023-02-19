import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Headerimg from "../../image/headerimg.png";
import Headerimg2 from "../../image/callto-text-bg.jpg";
import Headerimg3 from "../../image/callto-quote-bg.jpg";
export default () => {
  return (
    <>
      <section id="slider_main">
        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-12">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper_items">
                  <div className="slider_img">
                    <img src={Headerimg} alt="image lipstick" />
                  </div>
                  <div className="col-md-12 text-center ztext">
                    <h3 className="animate-charcter"> MakeUp artist</h3>
                  </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper_items">
                  <div className="slider_img">
                    <img src={Headerimg2} alt="image lipstick" />
                  </div>
                  <div className="col-md-12 text-center ztext">
                    <h3 className="animate-charcter"> Event MakeUp</h3>
                  </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper_items">
                  <div className="slider_img">
                    <img src={Headerimg3} alt="image lipstick" />
                  </div>
                  <div className="col-md-12 text-center ztext">
                    <h3 className="animate-charcter"> Creativ MakeUp </h3>
                  </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
};
