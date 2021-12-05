import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import {
  QuoteLeft,
  QuoteRight,
} from 'styled-icons/boxicons-solid/'
import {
  A11y,
  Autoplay,
  Pagination,
} from 'swiper'
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react'

import Container from '../../components/Container/Container'

const Praise = () => {
  return (
    <Container variant="secondary">
      <h2 className="text-gray-50">PRAISE</h2>
      <h3>What My Clients Say</h3>

      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        autoplay={{ delay: 15000 }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="px-20 pb-20 text-white">
            <div className="grid grid-cols-1">
              <QuoteLeft className="h-12 w-12 p-1" />
              <span className="leading-8 px-16 text-lg">
                I found Lynda’s meditation class to be very beneficial, and
                really helped me on my journey to where I am now – finally
                content within myself. Highly recommended!
              </span>
              <div className=" flex justify-end">
                <QuoteRight className="h-12 w-12 p-1 mr-4" />
              </div>
              <p className="text-right px-20 pt-10">Lee C</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-20 pb-20 text-white">
            <div className="grid grid-cols-1">
              <QuoteLeft className="h-12 w-12 p-1" />
              <span className="leading-8 px-16 text-lg">
                Lynda has a very calming way with her and found my session very
                helpful and relaxing would certainly recommend.
              </span>
              <div className=" flex justify-end">
                <QuoteRight className="h-12 w-12 p-1 mr-4" />
              </div>
              <p className="text-right px-20 pt-10">Christine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-20 pb-20 text-white">
            <div className="grid grid-cols-1">
              <QuoteLeft className="h-12 w-12 p-1" />
              <span className="leading-8 px-16 text-lg">
                I cannot recommend Lynda highly enough, she has the most calming
                manner and puts you at instant ease. I had reiki with her before
                a big operation, it really helped my anxiety and prepared me
                mentally so much I was laughing and happy as they wheeled me
                into the operating theatre! Reiki with Lynda was such a lovely
                life affirming experience, I wouldn’t hesitate to go back and
                have more treatments with her in the near future.
              </span>
              <div className=" flex justify-end">
                <QuoteRight className="h-12 w-12 p-1 mr-4" />
              </div>
              <p className="text-right px-20 pt-10">Elizabeth M</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-20 pb-20 text-white">
            <div className="grid grid-cols-1">
              <QuoteLeft className="h-12 w-12 p-1" />
              <span className="leading-8 px-16 text-lg">
                Before lock down I had a wonderful Reiki treatment with Lynda,
                she has a calm peaceful way about her. When the treatment was
                finished I felt no more pain in my shoulder and a total sense of
                serenity. I Highly recommended Reiki.
              </span>
              <div className=" flex justify-end">
                <QuoteRight className="h-12 w-12 p-1 mr-4" />
              </div>
              <p className="text-right px-20 pt-10">Christina</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-20 pb-20 text-white">
            <div className="grid grid-cols-1">
              <QuoteLeft className="h-12 w-12 p-1" />
              <span className="leading-8 px-16 text-lg">
                I had Reiki healing session with Lynda. The following day I felt
                much better and was able to get on with things so much easier.
                Will definitely be heading back for more.
              </span>
              <div className=" flex justify-end">
                <QuoteRight className="h-12 w-12 p-1 mr-4" />
              </div>
              <p className="text-right px-20 pt-10">Clive M</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-20 pb-20 text-white">
            <div className="grid grid-cols-1">
              <QuoteLeft className="h-12 w-12 p-1" />
              <span className="leading-8 px-16 text-lg">
                Thanks Lynda for your amazing reiki sessions, you are such a
                genuine and kind person, you really made me feel at ease, I
                highly recommend Lynda I certainly will keep coming back for
                more healing.
              </span>
              <div className=" flex justify-end">
                <QuoteRight className="h-12 w-12 p-1 mr-4" />
              </div>
              <p className="text-right px-20 pt-10">Sandi</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Praise
