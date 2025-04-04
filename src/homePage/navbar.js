
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBars , faHouse  ,faUtensils,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';
import {LangueContext} from '../App';

import '../i18n'; 
function Navbar(){
      const { t, i18n } = useTranslation();
  const {langue,setLangue}=useContext(LangueContext);
  const [Selected,setSelected]=useState(true);
const [SelectedLanguageImg,setSelectImg]=useState(  <img className="w-[40px]" src="https://flagsapi.com/GB/flat/64.png"></img>)
const [SelectedLanguagePays,setSelectPays]=useState(<span>{t('English')}</span>)

useEffect(()=>{
if(localStorage.getItem('langue')){
  i18n.changeLanguage(localStorage.getItem('langue'));
  setLangue(localStorage.getItem('langue'))

setSelectImg( <img className="w-[40px]" src={`https://flagsapi.com/${localStorage.getItem('image')}/flat/64.png`}></img>)
switch(localStorage.getItem('langue')){
case 'fr':
  setSelectPays(t('Français'))
  break;
case 'ar':
  setSelectPays(t('Arabe'))
  break;
default:
  setSelectPays(t('English'))
}
}
},[])



  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    
      setLangue(lang)


};
  
  const [hidden,setHidden]=useState(true)
    return(
    <header className="flex justify-center">
        <nav className={langue == 'ar' ? " z-50 py-[30px] px-[40px] justify-around flex-wrap max-md:items-center  flex items-end w-[95%] fixed  bg-white rounded-[10px] my-[15px]  rtl " : " z-50 py-[30px] flex-wrap px-[40px] w-[95%]  max-md:items-center justify-around  flex items-end fixed  bg-white rounded-[10px] my-[15px]   "}>
      <img className="max-md:w-[150px]   max-md:pb-[7px] " src={require('../images/logo.webp')}/>
        <ul className="ul1 flex justify-evenly  mb-[0px] h-[45px] w-[45%] items-center ">

            <li className={langue == 'ar' ? "font-semibold text-[18px]  ":"font-semibold text-[15px] text-gray-700"}  >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active text-orange-500 ' : 'inactive')}
            >
{t('HomeNavbar')}
            </NavLink>
            </li>
            <li className={langue == 'ar' ? "font-semibold text-[18px]  ":"font-semibold text-[15px] text-gray-700"} >
            <NavLink
              to="/menu"
              className={({ isActive }) => isActive ? 'active text-orange-500' : 'inactive'}
            >
{t('MenuNavbar')}

            </NavLink>
            </li>
            <li className={langue == 'ar' ? "font-semibold text-[18px]  ":"font-semibold text-[15px] text-gray-700"} >
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active text-orange-500' : 'inactive'}
            >
{t('AboutNavbar')}
</NavLink>
            </li>
            <li className={langue == 'ar' ? "font-semibold text-[18px]  ":"font-semibold text-[15px] text-gray-700"} >
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active text-orange-500' : 'inactive')}
            >
{t('ContactNavbar')}
</NavLink>            </li>

        </ul>

  
     <div className="flex flex-col font-semibold w-[150px] max-sm:w-[130px] items-center  border-[2px] border-gray-100 rounded-[8px] max-sm:hidden">
     <button
  onClick={()=>{
  if(Selected == true){
    setSelected(false)
    
  }else{
    setSelected(true)

  }
  }}
  className="flex items-center gap-[20px]">
{ SelectedLanguageImg} 
 {SelectedLanguagePays}
  </button>

  
     <ul className={Selected == true ? "   hidden " : " flex flex-col px-[1px] w-[150px]  gap-[10px] h-[150px] absolute mt-[55px] navSelect rounded-[6px] bg-white  "}>
     <li className={langue == 'ar' ? "bg-gray-100 w-full px-[10px] mx-auto " : "hover:bg-gray-100 px-[10px]"} >
<button
onClick={()=>{
  changeLanguage('ar')
  setSelectImg(<img className="w-[40px]" src="https://flagsapi.com/SA/flat/64.png"></img>);
  setSelectPays(<span>{t('Arabe')}</span>)
  setSelected(true)
  localStorage.setItem('langue','ar')
  localStorage.setItem('image','SA')

}}
className="flex items-center gap-[20px]">
<img className="w-[40px]" src="https://flagsapi.com/SA/flat/64.png"></img>
<span>{t('Arabe')}</span>
</button>
</li>


<li className={langue == 'en' ? "bg-gray-100 w-full px-[10px] mx-auto " : "hover:bg-gray-100 px-[10px]"}>
<button
onClick={()=>{
  changeLanguage('en')
  setSelectImg(<img className="w-[40px]" src="https://flagsapi.com/GB/flat/64.png"></img>);
  setSelectPays(<span>{t('English')}</span>)
  setSelected(true)
  localStorage.setItem('langue','en')
  localStorage.setItem('image','GB')

}}
className="flex items-center gap-[20px]">
<img className="w-[40px]" src="https://flagsapi.com/GB/flat/64.png"></img>
<span>{t('English')}</span>
</button>
</li>

<li className={langue == 'fr' ? "bg-gray-100 w-full px-[10px] mx-auto " : "hover:bg-gray-100 px-[10px]"} >
<button 
onClick={()=>{
  changeLanguage('fr')
  setSelectImg(<img className="w-[40px]" src="https://flagsapi.com/FR/flat/64.png"></img>);
  setSelectPays(<span>{t('Français')}</span>)
  setSelected(true)
  localStorage.setItem('langue','fr')
  localStorage.setItem('image','FR')

}}
className="flex items-center gap-[20px]">
<img className="w-[40px]" src="https://flagsapi.com/FR/flat/64.png"></img>
<span>{t('Français')}</span>
</button>
</li>

</ul>
     </div>
        
   
        <a   className='bg-orange-500 hover:bg-orange-600 duration-500  orderButton text-white italic no-underline  w-max z-30 rounded-tl-[15px] rounded-br-[15px] py-[10px] px-[15px]  font-semibold flex gap-[10px] items-center justify-center' target='_blanc' href="https://wa.me/+212658961963/">    
    <FontAwesomeIcon icon={faWhatsapp} fontSize={24} />
            
    {t('ButtonNavbarSection')}
          </a>
<div className="flex flex-col relative  items-center bg-white">
<button 
onClick={()=>{
  if(hidden){
    setHidden(false)
    
  }else{
    setHidden(true)
    if(!Selected){
      setSelected(true)
    }

  }
}}
className="menuButton     hover:border-orange-500 hover:border-[2px] hover:bg-white  pt-[4px] h-[40px] w-[50px] rounded-[5px] hidden bg-orange-500 ">
  <FontAwesomeIcon icon={faBars}  color="white" className="hover:text-orange-500" fontSize={25}/>
  </button>
{!hidden ?   <ul className="flex   h-max top-[50px] rounded-[5px] p-[20px] flex-col w-max   absolute bg-gray-50">

<li className="font-semibold text-[15px] text-gray-700">
<NavLink
  to="/"
  className={({ isActive }) => (isActive ? 'active text-orange-500 flex items-center gap-[10px]' : 'inactive flex items-center gap-[10px]')}
>
<FontAwesomeIcon icon={faHouse} fontSize={20} />

{t('HomeNavbar')}
</NavLink>
</li>
<li className="font-semibold  text-[15px] text-gray-700">
<NavLink
  to="/menu"
  className={({ isActive }) => isActive ? 'active text-orange-500 flex items-center gap-[15px]' : 'inactive flex items-center gap-[15px]'}
>
<FontAwesomeIcon icon={faUtensils} fontSize={20} />
{t('MenuNavbar')}
</NavLink>
</li>
<li className="font-semibold  text-[15px] text-gray-700">
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active text-orange-500 flex items-center gap-[18px]' : 'inactive flex items-center gap-[18px]'}
>
<FontAwesomeIcon icon={faAddressCard} fontSize={20} />

{t('AboutNavbar')}
</NavLink>
</li>
<li className="font-semibold text-[15px] text-gray-700">
<NavLink
  to="/contact"
  className={({ isActive }) => (isActive ? 'active text-orange-500 flex items-center gap-[15px]' : 'inactive flex items-center gap-[15px]')}
>
                 <FontAwesomeIcon icon={faPhoneVolume}  fontSize={20} />
  
{t('ContactNavbar')}
</NavLink>            </li>
<li className="sm:hidden">
<div className="flex  flex-col  font-semibold w-[150px] max-sm:w-[130px] items-center border-[2px] border-gray-200 rounded-[8px] ">
     <button
  onClick={()=>{
  if(Selected == true){
    setSelected(false)
    
  }else{
    setSelected(true)

  }
  }}
  className="flex items-center gap-[20px]">
{ SelectedLanguageImg} 
 {SelectedLanguagePays}
  </button>

  
     <ul className={Selected == true ? "   hidden " : " flex flex-col px-[1px] w-[150px]  gap-[10px] h-[150px] absolute mt-[55px] navSelect rounded-[6px] bg-white  "}>
     <li className={langue == 'ar' ? "bg-gray-100 w-full px-[10px] mx-auto " : "hover:bg-gray-100 px-[10px]"} >
<button
onClick={()=>{
  changeLanguage('ar')
  setSelectImg(<img className="w-[40px]" src="https://flagsapi.com/SA/flat/64.png"></img>);
  setSelectPays(<span>{t('Arabe')}</span>)
  setSelected(true)
  localStorage.setItem('langue','ar')
  localStorage.setItem('image','SA')
  setHidden(true)
}}
className="flex items-center gap-[20px]">
<img className="w-[40px]" src="https://flagsapi.com/SA/flat/64.png"></img>
<span>{t('Arabe')}</span>
</button>
</li>


<li className={langue == 'en' ? "bg-gray-100 w-full px-[10px] mx-auto " : "hover:bg-gray-100 px-[10px]"}>
<button
onClick={()=>{
  changeLanguage('en')
  setSelectImg(<img className="w-[40px]" src="https://flagsapi.com/GB/flat/64.png"></img>);
  setSelectPays(<span>{t('English')}</span>)
  setSelected(true)
  localStorage.setItem('langue','en')
  localStorage.setItem('image','GB')
  setHidden(true)

}}
className="flex items-center gap-[20px]">
<img className="w-[40px]" src="https://flagsapi.com/GB/flat/64.png"></img>
<span>{t('English')}</span>
</button>
</li>

<li className={langue == 'fr' ? "bg-gray-100 w-full px-[10px] mx-auto " : "hover:bg-gray-100 px-[10px]"} >
<button 
onClick={()=>{
  changeLanguage('fr')
  setSelectImg(<img className="w-[40px]" src="https://flagsapi.com/FR/flat/64.png"></img>);
  setSelectPays(<span>{t('Français')}</span>)
  setSelected(true)
  localStorage.setItem('langue','fr')
  localStorage.setItem('image','FR')
  setHidden(true)

}}
className="flex items-center gap-[20px]">
<img className="w-[40px]" src="https://flagsapi.com/FR/flat/64.png"></img>
<span>{t('Français')}</span>
</button>
</li>

</ul>
     </div>
</li>

</ul> : '' }
</div>
      </nav> 
    </header> 
    )
    }
    export default Navbar;