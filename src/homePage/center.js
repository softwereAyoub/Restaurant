import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';
import {LangueContext} from '../App';
import '../i18n'
; 

export default function Carousele() {
         const { t, i18n } = useTranslation();
           const {langue,setLangue}=useContext(LangueContext);
         
  return (
    <div id='hero' className={langue == 'ar' ? 'w-full center h-full flex flex-col  items-center gap-[30px] rtl justify-center text-center pb-[20px] relative overflow-hidden   max-md:gap-[20px] ' : 'w-full h-full flex flex-col gap-[30px]  relative overflow-hidden pl-[50px] center max-md:gap-[20px] '}>

<h1 className={langue == 'ar' ? 'hone bg-clip-text mt-[170px]   bg-gradient-to-br text-transparent from-white  to-yellow-100 text-[70px] z-20  font-extrabold' : 'hone bg-clip-text mt-[170px]   bg-gradient-to-br text-transparent from-white  to-yellow-100 text-[60px] z-20  font-bold'}>
  <strong>
  {t('HeroSectionTitle1')}<br /> {t('HeroSectionTitle2')} <span className='text-orange-300'>{t('HeroSectionTitle3')}</span>
  </strong>
</h1>
<p className='z-30 font-semibold text-white max-w-[400px]'>
{t('welcomeParagraph')}
</p>
<div className='flex items-center  gap-[20px]'>
{/* <button className='bg-orange-500 text-white w-max z-30 rounded-tl-[13px] rounded-br-[13px] p-[15px]  font-semibold italic flex gap-[10px] items-center justify-center'>
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
ORDER NOW VIA WHATSAPP  </button> */}
<a   className='bg-orange-500 buttonCenter hover:bg-orange-600 duration-500 no-underline text-white w-max z-30 rounded-tl-[15px] rounded-br-[15px] p-[15px]  font-semibold italic flex gap-[10px] items-center justify-center' target='_blanc' href="https://wa.me/+212658961963/">    
    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            
    {t('ButtonHeroSection')}
          </a>
{/* <button className='bg-gray-700 text-white w-max z-30 rounded-tl-[10px] rounded-br-[10px] p-[15px]  font-semibold flex gap-[20px] items-center justify-center'>
<FontAwesomeIcon icon={faUtensils} />
  Menu
  </button> */}
</div>

      <div className='overlay'></div>

    </div>
  );
}