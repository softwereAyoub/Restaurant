import React from "react"
import ReviewsCom from "./reviewComponents"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';
import '../../i18n'; 


export default function Reviews(){
           const { t } = useTranslation();
    
    return(
<div className=" p-[40px] flex flex-col items-center gap-[30px]">
    <img className="max-w-[200px] " src={require('../../images/Google-Review-Logo.webp')}/>
    <h2 className="text-[45px] max-sm:text-[35px] font-extrabold text-center">{t('ReviewsTitle')}</h2>
   <p className="w-[70%] font-semibold  text-gray-700 max-md:w-[90%] text-center text-[16px] ">{t('ReviewsP')}</p>
    <Carousel>
        <Carousel.Item interval={1500}>
        <ReviewsCom title='Álvaro Gutiérrez' date="2025-03-15" image='profiLImage/images.jpg' reviews={t('ReviewsP2')} />

   
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <ReviewsCom title='Aubert Alexandre' date="2025-03-15" image='profiLImage/test.jpg' reviews={t('ReviewsP3')} />

        </Carousel.Item>

        <Carousel.Item interval={1500}>
        <ReviewsCom title='Gonzalez Miguel' date="2025-03-15" image='profiLImage/gonzaliz.png' reviews={t('ReviewsP4')} />

        </Carousel.Item>

        <Carousel.Item interval={1500}>
        <ReviewsCom title='Smith Emma' date="2025-03-15" image='profiLImage/S.png' reviews={t('ReviewsP5')} />

        </Carousel.Item>
      </Carousel>
      
</div>
    )
}