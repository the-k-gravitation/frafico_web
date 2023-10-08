import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Slider = ({clients}) => {
  return (
    <Swiper slidesPerView={3} spaceBetween={20} slidesOffsetBefore={60} grabCursor={true}
    className="w-[81.25rem] h-[27.5rem]">
      {
        clients.map((client, index) => {
          const {message, image, name} = client;
          return <SwiperSlide key={index}>
            <div className="bg-white h-[22.5rem] drop-shadow-primary rounded-[10px] px-[3.125rem] pt-[3.75rem] pb-[2.5rem] flex flex-col justify-between">
              <p className=" font-light leading-[30px]">{message}</p>
              <div className="flex items-center gap-x-5">
                <Image src={image} width={60} height={60} alt="" />
                <span className=" font-semibold">{name}</span>
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default Slider