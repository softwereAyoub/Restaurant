import React from "react";
import { useTranslation } from 'react-i18next';
import '../../i18n'; 


export default function Gallery(){
       const { t, i18n } = useTranslation();
return(
    <section className="flex flex-col gap-[20px]">
        <h2 className="text-center text-[55px] font-extrabold ">{t('titleImage')}</h2>
        <p className="w-[70%] text-gray-700 font-semibold max-sm:w-[90%] text-center mx-auto">{t('paragrapghImage')} </p>
     <div className="flex justify-evenly items-center flex-wrap  gap-[15px] max-sm:gap-[25px] max-sm:flex-col">
        <img className="w-[400px] max-sm:w-[80%] h-[260px] rounded-[5px] hover:scale-[1.1] transition-all duration-500 " src={require('../../images/burger1.webp')}/>
        <img className="w-[400px] max-sm:w-[80%]  h-[260px] rounded-[5px] hover:scale-[1.1] transition-all duration-500 " src={require('../../images/dinner3.webp')}/>
        <img className="w-[400px] max-sm:w-[80%]  h-[260px] rounded-[5px] hover:scale-[1.1] transition-all duration-500 " src={require('../../images/drinks1.webp')}/>
     </div>

     <div className="flex justify-evenly items-center flex-wrap max-sm:gap-[25px] max-sm:flex-col">
        <img className="w-[400px] max-sm:w-[80%] rounded-[5px] hover:scale-[1.1] transition-all duration-500" src={require('../../images/gallery-img-04.webp')}/>
        <img className="w-[400px] max-sm:w-[80%] rounded-[5px] hover:scale-[1.1] transition-all duration-500" src={require('../../images/gallery-img-05.webp')}/>
        <img className="w-[400px] max-sm:w-[80%] rounded-[5px] hover:scale-[1.1] transition-all duration-500" src={require('../../images/gallery-img-06.webp')}/>
     </div>
    </section>
)
}