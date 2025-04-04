import React,{useContext, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils , faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {LangueContext} from '../../App';
import '../../i18n'; 
export default function Delivery(){
    const { t } = useTranslation();
  const {langue}=useContext(LangueContext)
  const refButton = useRef(null);
       

const [test,SetTest]=useState(20)
const [scrollValue,SetScrollValue]=useState(0)
  useEffect(()=>{
 
    var Menu=document.getElementById('menu');
    var welcome=document.getElementById('welcome');
var Hero=document.getElementById('hero');
    var MotorImage=document.getElementById('motor')

if(MotorImage){
  onscroll=function(){
  SetScrollValue(window.scrollY)    
    if(window.scrollY >=Menu.offsetHeight+welcome.offsetHeight+Hero.offsetHeight+400 && window.scrollY <= Menu.offsetHeight+welcome.offsetHeight+Hero.offsetHeight+900  && scrollValue < window.scrollY && test <=196 ){
      MotorImage.style.transform=`translate(${test}px,0px)`
      SetTest(test+3.8)
    
      
    }else if(window.scrollY >=Menu.offsetHeight+welcome.offsetHeight+Hero.offsetHeight+400 && window.scrollY  <= Menu.offsetHeight+welcome.offsetHeight+Hero.offsetHeight+900  &&  scrollValue > window.scrollY && test >= -2.4){
      MotorImage.style.transform=`translate(${test}px,0px)`
      SetTest(test-3.8)
  
    }


  if(refButton.current){
    if(window.scrollY > 1000){
      refButton.current.style.display='flex'
    }else{
      refButton.current.style.display='none'

    } 
  }
  
  }
}


  })

return(
  <section className='flex flex-col lft  mt-[50px] bg-gray-50 py-[45px] items-center'>
    <h3 className='text-center text-[55px] font-extrabold '>{t('LivraisonTitle')} </h3>
<p className='w-[60%] max-md:w-[90%] mx-auto text-center font-normal text-[18px] ' >{t('LivraisonP1')}</p>

<div className='flex justify-between items-center   mt-[40px] px-[50px] relative overflow-hidden'>

<div className='flex flex-col gap-[20px]'>
<h2 className='w-[40%] max-lg:w-[100%] font-extrabold text-[40px]'>
{t('LivraisonTitle2')}</h2>
<p className='w-[40%] font-semibold max-md:w-[60%]'>
{t('ParagraphDelivery')}</p>
<div className='flex items-center  gap-[20px] h-[80px]'>
  <a   className={langue == 'ar' ? 'bg-orange-500 no-underline hover:bg-orange-600 duration-500 text-white italic z-30 h-[50px] rounded-tl-[10px] w-[180px] rounded-br-[10px] p-[10px] px-[20px]  font-semibold flex gap-[10px] items-center justify-center rtl' : 'bg-orange-500 no-underline hover:bg-orange-600 duration-500 text-white italic z-30 h-[50px] rounded-tl-[10px] w-[180px] rounded-br-[10px] p-[10px] px-[20px]  font-semibold flex gap-[10px] items-center justify-center'} target='_blanc' href="https://wa.me/+212658961963/">    
  <FontAwesomeIcon icon={faWhatsapp} size="2x"  />
          
  {t('ButtonOrderNow2')}
        </a>
  <NavLink
    to="/menu"
    className={({ isActive }) => isActive ? 'active no-underline text-orange-500' : ' no-underline inactive'}
  >
<button className={langue == 'ar' ? 'bg-gray-700  hover:bg-gray-900 duration-500 text-white  italic z-30 h-[50px]  rounded-tl-[10px] rounded-br-[10px] p-[10px] px-[20px] font-bold flex gap-[15px] items-center justify-center rtl' : 'bg-gray-700  hover:bg-gray-900 duration-500 text-white  italic z-30 h-[50px]  rounded-tl-[10px] rounded-br-[10px] p-[10px] px-[20px] font-bold flex gap-[15px] items-center justify-center'}>
<FontAwesomeIcon icon={faUtensils} fontSize={22}  />
{t('ButtonMenu2')}
  </button>  </NavLink>

</div>
</div>

<img className='max-w-[20%] absolute right-[-100px] max-sm:max-w-[35%] ' src={require('../../images/burger.webp')}/>
<img id='motor' className='max-w-[500px] max-sm:max-w-[250px] absolute left-[37%] max-lg:left-[25%] max-md:max-w-[280px] max-sm:left-[10%] ' src={require('../../images/motor2.webp')}/>
      <button 
      onClick={()=>{
        window.scrollTo(0,0)
      }}
      ref={refButton} className='fixed hover:scale-[1.1] transition-all duration-500 z-[1000] hidden right-[30px] rounded-full bg-green-600  items-center justify-center  w-[40px] h-[40px] bottom-[60px]'>
      <FontAwesomeIcon icon={faArrowUp} color='white' fontSize={19} />
      </button>
  
      <a  className={langue == 'ar' ? 'fixed no-underline hover:scale-[1.1] transition-all duration-500 z-[1000] right-[15px] rounded-[20px] bg-green-600 flex items-center  gap-[10px] p-[10px] bottom-[10px] rtl' : 'fixed no-underline hover:scale-[1.1] transition-all duration-500 z-[1000] right-[15px] rounded-[20px] bg-green-600 flex items-center  gap-[10px] p-[10px] bottom-[10px]'} target='_blanc' href="https://wa.me/+212658961963/">    
      <FontAwesomeIcon icon={faWhatsapp} color='white' fontSize={25} />
 
        <span className='text-white font-semibold text-[13px]'>{t('helpButton')}</span>
  </a>
</div>
  </section>
)
}