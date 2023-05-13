import React from 'react'
import SliderItem from './SliderItem';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

const YtSlider = () => {


  const channels = [


    {
      "name": "Ashkan Karbasfrooshan",
      "subs": " 25M",
      "views": "16.201B",
      "para": (
        <p>
          {"\"DP\’s YouTube Services have been a game-changer for Watch Mojo! Thanks to your  "}
          <span className="text-[#0ECF91]">algorithm expertise,</span>
          {" because of which our channel has seen explosive growth.\""}
        </p>
      ),
      "url": "/Images/YouTubers/WatchMojo.jpg",
      "link": "Watch Mojo",
      "navtoportfolio": "/portfolio#Emil_Anton"
    },
    {
      "name": "Marton Barcza",
      "subs": "657K",
      "views": "69M",
      "para": (
        <p>
          {"\"Your services have been a Godsend for TechAltar! With your help, my channel now has a "}
          <span className="text-[#0ECF91]">clear direction </span>
          and purpose, resulting in <span className="text-[#0ECF91]">increased engagement</span>   {"and growth.\""}
        </p>
      ),
      "url": "/Images/YouTubers/techAltar.jpg",
      "link": "TechAltar",
      "navtoportfolio": "/portfolio#Ashkan_Karbasfrooshan"
    },

    {
      "name": "Emil C. Anton",
      "subs": "4.32M",
      "views": "549M",
      "para": (
        <p>
          {"\"Dawood provided a tailored "}
          <span className="text-[#0ECF91]">content strategy</span>
          {"  that helped me grow my brand. I highly recommend your services to anyone looking to improve their YouTube presence.\""}
        </p>
      ),
      "url": "/Images/YouTubers/alux1.jpg",
      "link": "Alux.com",
      "navtoportfolio": "/portfolio#Zach_Hsieh"
    },

    {
      "name": "Ian Plummer",
      "subs": "877K",
      "views": "243M",
      "para": (
        <p>
          {"\"Their strategic "}
          <span className="text-[#0ECF91]">Video Marketing Plan  </span>
          {"led to increased sales and brand recognition, by engaging car buyers and sellers across the UK.\""}
        </p>
      ),
      "url": "/Images/YouTubers/autotrader.jpg",
      "link": "AutoTrader",
      "navtoportfolio": "/portfolio#Linus_Sebastian"
    },
    {
      "name": "Emmeline Mayline",
      "subs": "2.91M",
      "views": "567M",
      "para": (
        <p>
          {"\"Thanks to my amazing "}
          <span className="text-[#0ECF91]">YouTube Keywords Researcher, </span>
          I have discovered the  <span className="text-[#0ECF91]">perfect keywords  </span> to help my <span className="text-[#0ECF91]">food</span> {"content thrive in the USA.\""}
        </p>
      ),
      "url": "/Images/YouTubers/Emmymade.jpg",
      "link": "EmmyMade",
      "navtoportfolio": "/portfolio#Emmeline_Mayline"
    },
    {
      "name": "Zach Hsieh",
      "subs": "5.49M ",
      "views": "933M",
      "para": (
        <p>
          {"\"Thanks to my incredible  "}
          <span className="text-[#0ECF91]">Content Ideas Guru </span>
          {" my art channel is now bursting with fresh and exciting video ideas that my subscribers love!. \""}
        </p>
      ),
      "url": "/Images/YouTubers/zhcnight.jpg",
      "link": "ZHC Crafts",
      "navtoportfolio": "/portfolio#Ian_Plummer"
    },
    {
      "name": "Linus Sebastian",
      "subs": "15.4M",
      "views": "6.877B",
      "para": (
        <p>
          {"\"Most of my videos are now dominating Google &  "}
          <span className="text-[#0ECF91]">YouTube Search Results  </span> only because of thanks to my beloved  <span className="text-[#0ECF91]">YouTube SEO  </span>
          {" YouTube SEO\""}
        </p>
      ),
      "url": "/Images/YouTubers/LinusTechTipsFace.webp",
      "link": "Linus Tech Tips",
      "navtoportfolio": "/portfolio#Marton_Barcza"
    }
  ]

  return (
    <div className="w-full min-h-screen ">
      <div className=" flex flex-col items-center justify-center gap-4 bg_slider relative w-full ">
        <h2 className='text-white font-Inter text-shadow-light text-[16px] tracking-[.2em] font-bold mt-3 md:mt-6 px-10 text-center'>TRUSTED BY LEADING CREATORS</h2>
        <div className='w-full h-full flex justify-center items-center relative'>

          <Swiper
            speed={2000}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            disabled={true}
            autoPlay={true}
            // loop={true}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={40}

            breakpoints={{
              480: {

                slidesPerView: 1,
                spaceBetween: 40,

              },
              680: {

                slidesPerView: 2,
                spaceBetween: 30,

              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              },

            }}




            className="mySwiper"
          >
            {channels.map((item, index) => (
              <SwiperSlide key={index}><SliderItem url={item.url} name={item.name} para={item.para} subs={item.subs} views={item.views} link={item.link} navtoportfolio={item.navtoportfolio}/></SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div >
    </div>
  )
}

export default YtSlider;