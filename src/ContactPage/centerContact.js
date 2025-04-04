import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import '../i18n'
import {LangueContext} from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function CenterContact(){
                     const { t } = useTranslation();
                       const {langue}=useContext(LangueContext)
    
return(
    <div className=' w-full h-full  flex flex-col gap-[30px] justify-center items-center   overflow-hidden px-[30px]'>

    <h1 className='hone bg-clip-text  mt-[20px]   bg-gradient-to-br text-transparent from-white  to-yellow-100 text-[64px] z-20 txt-center  font-extrabold'>
    {t('PageContactTitle')} 
    </h1>

   
    
          <div className='overlay'></div>
               <a  className={langue == 'ar' ? 'fixed no-underline hover:scale-[1.1] transition-all duration-500 z-[1000] right-[15px] rounded-[20px] bg-green-600 flex items-center  gap-[10px] p-[10px] bottom-[10px] rtl' : 'fixed no-underline hover:scale-[1.1] transition-all duration-500 z-[1000] right-[15px] rounded-[20px] bg-green-600 flex items-center  gap-[10px] p-[10px] bottom-[10px]'} target='_blanc' href="https://wa.me/+212658961963/">    
                          <FontAwesomeIcon icon={faWhatsapp} color='white' fontSize={25} />
                     
                            <span className='text-white font-semibold text-[13px]'>{t('helpButton')}</span>
                      </a>
        </div>
)
}