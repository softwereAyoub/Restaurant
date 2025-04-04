import React, { useEffect,useContext } from "react";
import Navbar from "../homePage/navbar";
import Footer from "../homePage/footer/footer";
import CenterContact from "./centerContact";
import Form from "./form";
import {LangueContext} from '../App';
import Maps from "./maps";

export default function ContactPage(){
    const {langue}=useContext(LangueContext)

        useEffect(()=>{
    if(window.scrollY > 10){
    window.scrollTo(0,0)
    
    }
        },[])
return(
<main className={langue == 'ar' ? "flex flex-col gap-[50px] rtl " : "flex flex-col gap-[50px] "}>
<section className="h-[90vh] relative flex flex-col cardsPages">
<Navbar/>
    <CenterContact/>

 </section>

<Form/>
<Maps/>
<Footer/>

</main>
)
}