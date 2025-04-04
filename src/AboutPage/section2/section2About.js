import React from 'react'
import { useTranslation } from 'react-i18next';
import '../../i18n'

export default function Section2(){
     const { t, i18n } = useTranslation();
    return(
        <section className='flex justify-around p-[15px] pt-[70px] aboutSection3   items-center bg-gray-100'>
           <div className='w-[50%] aboutCard flex flex-col items-center  gap-[20px]'>
            <h2 className='font-extrabold text-[45px] max-sm:text-[35px] text-center'>
            {t('Section2AboutT')}
            </h2>
        <p>
        {t('Section2AboutP')}
        </p>
        <div className='flex   gap-[50px] justify-center items-center flex-wrap'>


            <div className='w-[250px] border-[1px] bg-white flex flex-col items-center p-[20px] '>
<h3 className='font-bold italic'>3</h3>
<span className='font-medium text-[19px]'>{t('Locations')}</span>
            </div>
            <div className='w-[250px] border-[1px] bg-white flex flex-col items-center p-[20px]'>
            <h3 className='font-bold italic'>1995</h3>
            <span className='font-medium text-[19px]'>{t('Founded')}</span>
            </div>
            
        </div>

        <div className='flex  gap-[50px] justify-center items-center flex-wrap'>
            <div className='w-[250px] border-[1px] bg-white flex flex-col items-center p-[20px]'>
<h3 className='font-bold italic'>65+</h3>
<span className='font-medium text-[19px]'>{t('Staff Members')}</span>
            </div>
            <div className='w-[250px] border-[1px] bg-white flex flex-col items-center p-[20px]'>
            <h3 className='font-bold italic'>100%</h3>
            <span className='font-medium text-[19px]'> {t('Satisfied Customers')}</span>
            </div>
            
        </div>
           </div>
         
           <img className='lg:max-w-[480px] max-md:w-[90%]' src={require('../../images/Mask group.webp')}/>





           
        </section>
    )
}