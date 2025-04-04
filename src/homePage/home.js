import React, { useContext } from "react";
import Navbar from "./navbar";
import Carousele from "./center";
import './center.css';
import Welcome from "./welcome/welcome";
import Section3 from "./Section3/section3";
import Menu from "./Menu/menu";
import Delivery from "./delivery/delivery";
import Reviews from "./reviews/reviews";
import Gallery from "./gallery/gallery";
import Footer from "./footer/footer";
import Subscribe from "./subscribe";
import {LangueContext} from '../App';
function Home(){
      const {langue}=useContext(LangueContext)
    
return(
    <div className={langue == 'ar' ? "flex flex-col gap-[80px] rtl " : "flex flex-col gap-[80px] "}>
        <div className="home flex flex-col gap-[5px]  h-[100vh]">
<Navbar/>

     <Carousele/>
    
 </div>

 <div className="flex flex-col gap-[70px]">
 <Welcome/>
 <Section3/>
 <Menu/>
 <Delivery/>
 <Gallery/>
 <Reviews/>
 <Subscribe/>
 <Footer/>

 </div>
    </div>
 
)
}
export default Home;