

import React from 'react'
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../../i18n'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhoneVolume,faClock,faLink } from '@fortawesome/free-solid-svg-icons'
export default function Footer(){
          const { t } = useTranslation();
    
return(
    <footer className="footer px-[35px] pt-[150px] pb-[10px] flex flex-col gap-[30px] ">
<div className='w-full flex gap-[80px] justify-around items-start flex-wrap '>
<div className='w-[250px] flex flex-col gap-[20px]'>

<div className='flex flex-col '>
<h2 className='text-white gap-[20px] flex items-center text-[25px] font-bold'>
                   <FontAwesomeIcon icon={faPhoneVolume} color="white" fontSize={25} />
    
    {t('Get In Touch')}
    </h2>

<hr className='h-[2px] bg-white'></hr>
</div>
<div>
<p className='text-gray-300'>
    {t('FooterAddress')}</p>
<p className='text-gray-300'>+39-055-123456</p>
<p className='text-gray-300'>booking@webexample.com</p>
<p>
<img className='cursor-pointer' src={require('../../images/icons.webp')} />

</p>
</div>


    </div>

<div className=' w-[250px] flex flex-col gap-[25px]'>
<div className='flex flex-col  w-full'>
<h2  className='text-white  flex items-center gap-[20px] text-[25px] font-bold'>
<FontAwesomeIcon icon={faLink} color="white" fontSize={25}  />
{t('Useful links')}
</h2>
<hr className='h-[2px] bg-white'></hr>
</div>

<ul className='flex flex-col gap-[20px]    '>
    <li className='text-gray-300 '>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active text-orange-200' : 'inactive text-gray-300  ')}
        >
        {t('HomeNavbar')}
        </NavLink>
    </li>
    <li className='text-gray-300 '>
        <NavLink
          to="/menu"
          className={({ isActive }) => isActive ? 'active text-orange-200' : 'inactive text-gray-300 '}
        >
        {t('MenuNavbar')}
        </NavLink>
    </li>

    <li className='text-gray-300 '>
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active text-orange-200' : 'inactive text-gray-300'}
>
{t('AboutNavbar')}
</NavLink>    </li>
    <li className='text-gray-300 '>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active text-orange-200' : 'inactive text-gray-300')}
        >
        {t('ContactNavbar')}
        </NavLink>
    </li>
    </ul>

</div>

<div className=' w-[250px] flex flex-col gap-[25px]'>
<div className='flex flex-col w-full'>
<h2  className='text-white flex items-center gap-[20px] text-[25px] font-bold'>
<FontAwesomeIcon icon={faClock} color="white" fontSize={25} />

{t('Working Hours')}
</h2>
<hr className='h-[2px] bg-white'></hr>
</div>

<div className='flex flex-col gap-[20px]'>
    <p className='text-gray-300'>{t('FooterWorking1')}</p>
    <p className='text-gray-300'>
    {t('FooterWorking2')}    </p>
    <p className='text-gray-300'> {t('FooterWorking3')}</p>
</div>

</div>
</div>
<hr className='bg-white h-[2px] w-[90%] mx-auto'/>
<p className='text-gray-300 text-center'>All Rights Reserved. © 2025 Live <span className='text-orange-400'>Dinner Restaurant</span></p>
    </footer>
)
}