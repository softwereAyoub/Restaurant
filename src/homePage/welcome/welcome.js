import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../../i18n';
import {LangueContext} from '../../App';
export default function Welcome(){
             const { t } = useTranslation();
    const {langue}=useContext(LangueContext)
  
return(
    <section id="welcome" className="welcome  flex gap-[100px] p-[30px] justify-center items-center relative overflow-hidden ">
        <img className="absolute top-0 right-[30%] z-[-66] max-lg:hidden " src={require('../../images/Group.jpg')}/>

        <img className=" absolute bottom-2 right-[-50px] z-[-66] max-lg:hidden" src={require('../../images/Group2.jpg')}/>
        <img className="max-w-[350px] rounded-[8px]" src={require('../../images/happy2.webp')}/>
        <div className={langue == 'ar' ? "welcomeContent flex flex-col gap-[25px] rtl" : "welcomeContent flex flex-col gap-[25px] "}>
            <h2 className="text-orange-500 text-center font-bold text-[45px]">{t('welcomeTitle')}</h2>
            <p className="font-semibold max-lg:text-center max-w-[450px]   ">{t('welcomeParagraph')}</p>
            <div className='flex items-center w-full flex-wrap max-lg:justify-center gap-[20px]'>

     <a   className={langue == 'ar' ? 'bg-orange-500 no-underline hover:bg-orange-600 duration-500 text-white italic z-30 h-[50px] rounded-tl-[10px] w-[180px] rounded-br-[10px] p-[10px] px-[20px]  font-semibold flex gap-[10px] items-center justify-center rtl' : 'bg-orange-500 no-underline hover:bg-orange-600 duration-500 text-white italic z-30 h-[50px] rounded-tl-[10px] w-[180px] rounded-br-[10px] p-[10px] px-[20px]  font-semibold flex gap-[10px] items-center justify-center'} target='_blanc' href="https://wa.me/+212658961963/">    
     <FontAwesomeIcon icon={faWhatsapp} size="2x"  />
             
     {t('ButtonOrderNow')}
           </a>
  
  <NavLink
      to="/menu"
      className={({ isActive }) => isActive ? 'active no-underline text-orange-500' : ' no-underline inactive'}
    >
  <button className={langue == "ar" ? 'bg-gray-700 hover:bg-gray-900 duration-500 text-white  italic z-30 h-[50px]  rounded-tl-[10px]  w-[180px]  rounded-br-[10px] p-[10px] px-[20px] font-bold flex gap-[15px] items-center justify-center rtl ' : 'bg-gray-700 hover:bg-gray-900 duration-500 text-white  italic z-30 h-[50px]  rounded-tl-[10px]  w-[180px]  rounded-br-[10px] p-[10px] px-[20px] font-bold flex gap-[15px] items-center justify-center'}>
  <FontAwesomeIcon icon={faUtensils} fontSize={22}  />
  {t('ButtonMenu')}
      </button>  </NavLink>
  </div>
     
         </div>
    </section>
)
}