import React, { useContext, useEffect } from "react";
import CenterMenu from "./centerMenu/centerMenu";
import Navbar from "../homePage/navbar";
import Menu from "../homePage/Menu/menu";
import Footer from "../homePage/footer/footer";
import {LangueContext} from '../App';

export default function MenuPage(){
      const {langue,setLangue}=useContext(LangueContext)
    
          useEffect(()=>{
      if(window.scrollY > 10){
      window.scrollTo(0,0)
      
      }
          },[])

return(
<main className={langue == 'ar' ? "flex flex-col gap-[50px] rtl" : "flex flex-col gap-[50px] "}>
<section className="h-[90vh] relative flex flex-col cardsPages">
<Navbar/>
    <CenterMenu/>

 </section>
 <section className="mb-[50px]" >
       <Menu/>
 </section>
<Footer/>
</main>
)
}