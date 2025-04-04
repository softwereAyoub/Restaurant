import React, { useContext } from 'react'
import {LangueContext} from '../../App';

export default function Section3(){
      const {langue,setLangue}=useContext(LangueContext)
  
    return(
        <section className={langue == 'en' ? 'cardsAbout flex justify-center pt-[70px] flex-wrap gap-[50px]  items-center ' : 'hidden'}>
          <img className='max-sm:max-w-[350px]'  src={require('../../images/card1.jpg')}/>
          <img className='max-sm:max-w-[350px]'   src={require('../../images/card2.jpg')}/>
          <img className='max-sm:max-w-[350px]'   src={require('../../images/card3.jpg')}/>

           
        </section>
    )
}