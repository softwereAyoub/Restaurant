import React, { useContext } from "react";
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';
import '../i18n'; 
import {LangueContext} from '../App';

export default function Subscribe(){
    const { t } = useTranslation();
  const {langue}=useContext(LangueContext)

   

        const onSubmit=(event)=>{
            event.preventDefault();
            Swal.fire({
                            title: "Success !",
                            text: "Email saved successfully !",
                            icon: "success"
                          });
        }
return(
    <section className={langue == 'ar' ? "w-[80%]   bg-white sub h-max rounded-[5px] flex flex-col items-center gap-[30px] p-[40px] mx-auto rtl" :"w-[80%]  bg-white sub h-max rounded-[5px] flex flex-col items-center gap-[30px] p-[40px] mx-auto"}>
<div className="flex flex-col items-center gap-[15px] ">
<h2 className="text-[30px] max-sm:font-extrabold max-sm:text-[25px] text-center font-bold">{t('subcsribeT')}</h2>
<p className="text-gray-400 text-center">{t('subcsribeP')}</p>
</div>
<form onSubmit={onSubmit} className="w-full max-md:flex-col max-md:gap-[30px] flex gap-[50px] items-center justify-center">
<input type="email" className="border-[1px] border-gray-200 px-[20px] py-[15px] rounded-[50px] w-[40%] max-md:w-[90%] outline-none" placeholder={t('placeHolderSubcsribe')} title="Enter the email address correctly" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
<button   className={langue == 'ar' ? ' text-white w-max h-max z-30 rounded-[50px] py-[12px] px-[35px] font-semibold  ':' text-white w-max h-max z-30 rounded-[50px] py-[12px] px-[35px] font-bold  '}>{t('ButtonSubscribe')}</button>
</form>


    </section>
)
}