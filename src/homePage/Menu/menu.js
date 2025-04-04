import React, { useState,useRef,useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './menu.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import '../../i18n'; 
import {LangueContext} from '../../App';

gsap.registerPlugin(ScrollTrigger);

export default function Menu(){
            const { t } = useTranslation();
      const {langue}=useContext(LangueContext);
    
    const containerRef = useRef(null);
    const [active, SetActive] = useState('all');
   
       useEffect(() => {
           const elements = containerRef.current.querySelectorAll('.product');
           Array.from(elements).forEach((element) => {
            gsap.fromTo(
              element,
              { opacity: 0, y: 50, scale: 0.6, rotate: -40 }, // État initial
              {
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
                duration: 8, // Animation rapide et fluide
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element, // Chaque élément a son propre trigger
                  start: "top 80%", // Débute quand l'élément entre dans l'écran
                  end: "top 40%", // Se termine quand il atteint 50% du viewport
                  toggleActions: "play none none none", // Joue une seule fois
                  scrub:true// Animation ne se répète pas
                },
              }
            );
          });

     
         }, [active]);
  
return(
    <section id="menu" ref={containerRef} className={langue == 'ar' ? "mt-[50px] w-full  flex flex-col gap-[25px] rtl" : "mt-[50px] w-full  flex flex-col gap-[25px] "}>
<div className="flex flex-col gap-[10px] items-center w-[60%] max-lg:w-[90%] text-center mx-auto">
<h2 className="text-[55px] font-extrabold">{t('MenuTitle')}</h2>
<p className="font-semibold text-gray-700">
{t('menuP')} 
</p>
</div>
<ul className="flex w-[60%] max-lg:w-[100%] justify-evenly mx-auto items-center">
    <li className="flex flex-col items-center  font-semibold w-[90px]" >
        <button 
           onClick={()=>{
            SetActive('all')
        }}
        className={active == "all" ? 'text-orange-500' : ''}>{t('All')}</button>
     {active == 'all' ?    <div className="flex gap-[5px] items-center ">
            <div className="w-[40px] h-[4px] bg-orange-400"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-orange-400"></div>
            <div className="w-[40px] h-[4px] bg-orange-400"></div>

        </div> :''}
    </li>
    <li className="flex flex-col items-center  font-semibold w-[90px]" >
        <button 
        onClick={()=>{
            SetActive('drinks')
        }}
         className={active == "drinks" ? 'text-orange-500' : ''}>{t('Drinks')}</button>
     {active == 'drinks' ?    <div className="flex gap-[5px] items-center ">
            <div className="w-[40px] h-[4px] bg-orange-400"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-orange-400"></div>
            <div className="w-[40px] h-[4px] bg-orange-400"></div>

        </div> :''}
    </li>
    <li className="flex flex-col items-center  font-semibold w-[90px]" >
        <button 
        onClick={()=>{
            SetActive('lunch')
        }}
         className={active == "lunch" ? 'text-orange-500' : ''}>{t('Lunch')}</button>
     {active == 'lunch' ?    <div className="flex gap-[5px] items-center ">
            <div className="w-[40px] h-[4px] bg-orange-400"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-orange-400"></div>
            <div className="w-[40px] h-[4px] bg-orange-400"></div>

        </div> :''}
    </li>
    <li className="flex flex-col items-center  font-semibold w-[90px]" >
        <button 
        onClick={()=>{
            SetActive('dinner')
        }}
         className={active == "dinner" ? 'text-orange-500' : ''}>{t('Dinner')}</button>
     {active == 'dinner' ?    <div className="flex gap-[5px] items-center  ">
            <div className="w-[40px] h-[4px] bg-orange-400"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-orange-400"></div>
            <div className="w-[40px] h-[4px] bg-orange-400"></div>

        </div> :''}
    </li>

</ul>

{active == 'all' ? <div  className="flex flex-col gap-[35px] ">
    <div  className="flex gap-[30px] justify-evenly w-[80%] mx-auto flex-wrap">
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] img rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/drinks1.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Baraka Boost')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard2')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 20.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    <div className="w-[280px] flex flex-col  product items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/drinks2.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Andalusian Mist')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard1')}</p>
    <h2 className="text-orange-500 hover:bg-orange-600 duration-500  font-normal text-[18px]  ">{t('MAD')} 30.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/drinks3.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Sheikh’s Delight')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard3')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 35.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    </div>




    <div    className="flex gap-[30px] justify-evenly w-[80%] mx-auto flex-wrap">
<div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/burger1.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Sultan Burger')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard4')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 50.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
      {t('ButtonOrderNow')}
      </a>

    </div>   
    <div className="w-[280px] flex flex-col  product items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/salad1.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Oasis Salad')} </h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard5')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 40.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/salad2.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Andalusian Salad')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard6')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 60.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    </div>


    <div className="flex gap-[30px] justify-evenly w-[80%] mx-auto flex-wrap">
<div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/dinner2.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Oasis Mixed Grill')} </h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard7')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 40.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/dinner1.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Sultan’s Feast')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard8')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 70.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>

    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/dinner3.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Desert Spice Chicken')} </h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard9')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 50.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    </div>
</div> : ''}

{active == 'drinks' ? <div  className="flex flex-col gap-[25px]">
    <div  className="flex gap-[30px] justify-evenly w-[80%] mx-auto flex-wrap">
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] img rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/drinks1.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Baraka Boost')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard2')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 20.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    <div className="w-[280px] flex flex-col  product items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/drinks2.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Andalusian Mist')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard1')}</p>
    <h2 className="text-orange-500 hover:bg-orange-600 duration-500  font-normal text-[18px]  ">{t('MAD')} 30.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/drinks3.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Sheikh’s Delight')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard3')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 35.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    </div>




</div> : ''}

{active == 'lunch' ? <div className="flex flex-col gap-[25px]">

    <div    className="flex gap-[30px] justify-evenly w-[80%] mx-auto flex-wrap">
<div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/burger1.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Sultan Burger')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard4')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 50.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
      {t('ButtonOrderNow')}
      </a>

    </div>   
    <div className="w-[280px] flex flex-col  product items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/salad1.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Oasis Salad')} </h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard5')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 40.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/salad2.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Andalusian Salad')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard6')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 60.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    </div>


</div> : ''}

{active == 'dinner' ? <div className="flex flex-col gap-[25px]">
    <div className="flex gap-[30px] justify-evenly w-[80%] mx-auto flex-wrap">
<div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/dinner2.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Oasis Mixed Grill')} </h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard7')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 40.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    
    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/dinner1.webp')}/>

 <h2 className="font-bold text-[24px]  ">{t('Sultan’s Feast')}</h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard8')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 70.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>

    <div className="w-[280px] flex flex-col product  items-center gap-[10px] cards rounded-[15px]   h-max">
    <img className="w-[100%] h-[180px] rounded-tl-[15px] rounded-tr-[15px]" src={require('../../images/dinner3.webp')}/>

 <h2 className="font-bold text-[24px] ">{t('Desert Spice Chicken')} </h2>
    <p className="text-center font-semibold text-gray-700">{t('paragrapghMenuCard9')}</p>
    <h2 className="text-orange-500 font-normal text-[18px]  ">{t('MAD')} 50.00</h2>

    <img className="max-w-[50%]" src={require('../../images/etoile.webp')}/>
    <a  className='bg-orange-500 hover:bg-orange-600 duration-500 text-white w-full z-30  p-[10px]  font-bold italic text-[17px]  rounded-bl-[15px] rounded-br-[15px] flex gap-[15px] items-center justify-center no-underline' target='_blanc' href="https://wa.me/+212658961963/">    
<FontAwesomeIcon icon={faWhatsapp} size="2x"  />
        
{t('ButtonOrderNow')}
</a>

    </div>
    </div>


</div> : ''}
      
    </section>
)
}