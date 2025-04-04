import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope , faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import '../../i18n'

export default function Section1(){
     const { t, i18n } = useTranslation();
    return(
        <section className='flex justify-around  aboutSection items-center'>
           <div className='w-[40%] cardAbout2  '>
           <img className='  max-md:w-[80%] max-sm:w-[95%]' src={require('../../images/plats.webp')}/>
            <div className='cardAbout h-max p-[20px] max-w-[350px] bg-gray-700 rounded-[12px] absolute'>
               
                <ul className='flex flex-col gap-[15px]'>
                    <li className=' text-white'>
                    <h2 className='font-extrabold text-[25px]'> {t('CardGrayTitle')}</h2>
                    </li>
                    <li className='font-semibold text-white gap-[15px] flex items-center '>
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    (414) 857 - 0107
                    </li>
                    <li className='font-semibold text-white gap-[15px] flex items-center'>
                    <FontAwesomeIcon icon={faEnvelope} size='lg' />
                    happytummy@restaurant.com
                    </li>
                    <li className='font-semibold text-white gap-[15px] flex '>
                    <FontAwesomeIcon icon={faLocationDot} size='lg' />
                    {t('CardGrayLocalisation')}             
                           </li>
                </ul>
            </div>
           </div>
           <div className='w-[40%]  paragAbout items-center  flex flex-col  gap-[20px]'>
            <h2 className=' text-[40px]  font-extrabold '>{t('Section1AboutT')}</h2>
            <p className='text-[20px]'>
            {t('Section1AboutP1')}
                        </p>
            <p className='parag  '>
            {t('Section1AboutP2')}
                        </p>
           </div>
        </section>
    )
}