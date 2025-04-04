import React, { useEffect , useContext} from "react";
import Navbar from "../homePage/navbar";

import Footer from "../homePage/footer/footer";
import CenterAbout from "./centerAbout";
import Section1 from "./section1/section1About";
import Section2 from "./section2/section2About";
import Section3 from "./section3/section3About";
import Reviews from "../homePage/reviews/reviews";
import {LangueContext} from '../App';


export default function AboutPage(){
          const {langue}=useContext(LangueContext)
    
    useEffect(()=>{
if(window.scrollY > 10){
window.scrollTo(0,0)

}
    },[])
return(
<main className={langue == 'ar' ? "flex flex-col gap-[100px] fontArabic" : "flex flex-col gap-[100px] "}>
<section className="h-[90vh] relative flex flex-col cardsPages">
<Navbar/>
    <CenterAbout/>

 </section>
 <Section1/>
 <Section3/>

 <Section2/>
 <Reviews/>
<Footer/>
 
</main>
)
}