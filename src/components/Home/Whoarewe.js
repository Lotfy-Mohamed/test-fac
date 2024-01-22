// 'use client'
// Import Swiper React components (Swiper, SwiperSlide) => https://swiperjs.com
import {Swiper , SwiperSlide} from "swiper/react"
// Import Auto Play From Swiper and Effect Cards
import { EffectCards , Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// Sart of Whoarewe Function
export default function Whoarewe() {
    return (
        <>  
        {/* 
            Import Container From Bootstrap
            Start of Whoarewe Section
            .text-box containe Text
            .image-wrap containe  3 Images
            */}
            <div className="container">
                <div className="who-are">
                    <div className="text-box">
                        <h3>من نحن</h3>
                        <p>
                            و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر و ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر
                        </p>
                    </div>
                    <div className="image-wrap">
                        <div className="image-box">
                            <div className="swiper-box">

                                {/* 
                                    Start Swiper Slider
                                    ? Effect => Effect Cards
                                    ? Autoplay => Autoplay Slider
                                    ? className => mySwiper

                                    Every Swiper Slide Containe Dic With Class Name (one , two , three)
                                    Every Dic Containe spacific Background Image
                                */}
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards ,Autoplay]}
                                    autoplay={{
                                        delay:1500,
                                        disableOnInteraction: false,
                                    }}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="one">
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="two">
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="three">
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}