'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import InfoCard from 'components/InfoCard'

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  textInfo: string;
}


interface SlideProps {
  data: Slide[];
}

const FeaturesView: React.FC<SlideProps> = ({ data }) => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={'auto'}>
      {data.map(({ id, title, subtitle, textInfo }) => (
        <SwiperSlide key={id} className="w-[86svw]  lg:w-[324px] ">
          <InfoCard.Card className="h-[486px] lg:h-[395px]">
            <InfoCard.Subtitle children={subtitle} className="mb-5"/>
            <InfoCard.Title children={title} />
            <InfoCard.Content children={textInfo} />
          </InfoCard.Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FeaturesView;

