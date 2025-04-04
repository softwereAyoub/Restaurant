import React, { useState } from "react"
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhoneVolume,faClock,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import '../i18n'
import { ThreeDot } from "react-loading-indicators";

export default function Form(){

          const { t } = useTranslation();
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [Subject,setSubject]=useState('');
    const [Message,setMessage]=useState('');
    const [Error,setError]=useState(false);
    const [Submit,setSubmit]=useState(false);

    function escapeHTML(str) {
      return str.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
               
  }
  // 2848baca-7b03-4f03-9c40-b9e5d71317c0
    const onSubmit = async (event) => {
     try{
      event.preventDefault();

      if(!/[<>]/.test(Message) ){
        setSubmit(true)

        const formData = new FormData(event.target);
    
        formData.append("access_key", "2848baca-7b03-4f03-9c40-b9e5d71317c0");
    
const MessageSecure=escapeHTML(Message)
const NameSecure=escapeHTML(Name)
const EmailSecure=escapeHTML(Email)
const SubjectSecure=escapeHTML(Subject)
        const object = Object.fromEntries(formData);
        object.subject = SubjectSecure;
        object.name = NameSecure;
        object.email = EmailSecure;
        object.Message = MessageSecure;

    

        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          if(Error){
            setError(false)
          }
       
            setSubmit(false)
        
setName('')  
setMessage('')
setSubject('')
setEmail('')
          Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
      else{


        setError('The Message field must not contain certain elements.');

      }
     }catch(err){

      setError('Error in this server');
 if(Submit){
            setSubmit(false)
          }
     }
       
      };
    return(
<main className="flex flex-col gap-[80px]">
<section>
            <form onSubmit={onSubmit} className="form w-[60%] max-sm:w-[80%] flex flex-col gap-[35px] rounded-[7px]  mx-auto  p-[35px] ">
<h2 className="font-bold text-center text-[40px] max-sm:text-[25px] italic">{t('Contact Form')}</h2>
   <div className="flex flex-col  gap-[30px] items-center">

   <div className="flex contactInput w-full items-center gap-[25px] ">
<div className="flex flex-col gap-[10px] w-[340px]">
<label for="name" className="font-semibold">{t('Name')}</label>
<input type="text" name="name" pattern="[A-Za-z']{2,30}" title="Field is for letters only" placeholder={t('NamePlaceholder')} id="name" className=" border-[1px] border-gray-200 py-[18px] px-[15px] rounded-[50px] outline-none" required value={Name}  onChange={(e)=>{
setName(e.target.value)
}}/>
</div>
<div className="flex flex-col gap-[10px] w-[340px] ">
<label for="email" className="font-semibold">{t('Email')}</label>
<input type="email" name="email" placeholder={t('EmailPlaceholder')} title="Enter the email address correctly" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"  id="email" className=" border-[1px] border-gray-200 py-[18px] px-[15px] rounded-[50px] outline-none" value={Email}  onChange={(e)=>{
setEmail(e.target.value)
}} required/>
</div>
   </div>
   <div className="flex flex-col gap-[10px] w-[100%] ">
   <label for="subject" className="font-semibold">{t('Subject')}</label>
   <input type="text" name="subject" placeholder={t('SubjectPlaceholder')} pattern="[A-Za-z0-9'\s]{2,70}" title="Field is for letters and numbers only" id="subject" className=" border-[1px] border-gray-200 py-[18px] px-[15px] rounded-[50px] outline-none" value={Subject}  onChange={(e)=>{
setSubject(e.target.value)
}} required/>
   </div>
   <div className="flex flex-col gap-[10px] w-[100%] ">
   <label for="message" className="font-semibold">{t('Message')}</label>
<textarea   placeholder={t('MessagePlaceholder')} id="message" pattern="[A-Za-z0-9]{2,70}" title="Field is for letters and numbers only" className=" border-[1px] border-gray-200 py-[18px] px-[15px] rounded-[8px] outline-none h-[200px]" value={Message}  onChange={(e)=>{
setMessage(e.target.value)
if(Error){
  setError(false)
}
}} required>
    </textarea>   
    </div>
    {Error ? <div className="w-full bg-red-500 text-white text-center font-semibold p-[10px] rounded-[8px] ">
      {Error}
    </div> : ''}

    <button className="w-[100%] hover:scale-[1.1] transition-all duration-500 bg-orange-500 sendButton font-bold text-white p-[10px] rounded-[50px] text-[20px]">
      {Submit ? <ThreeDot color="white" size="small" text="" textColor="" />: t('SendButton') }
    
      
      </button>

   </div>
</form>
        </section>
        <section className="flex w-full justify-center flex-wrap gap-[50px] contactCard ">
            <div className="w-[300px] flex flex-col gap-[15px] items-center cards">
               <div className="w-full flex items-center justify-center gap-[15px]">
               <FontAwesomeIcon icon={faPhoneVolume} color="#123" fontSize={25} />
               <h3 className="font-bold italic">{t('Call Us')}</h3>
               </div>
                <span className="font-semibold text-orange-600 text-[25px]">+1-234-567-8900</span>
            </div>
            <div className="w-[300px] flex flex-col gap-[15px] text-center items-center cards">
            <div className="w-full flex items-center justify-center  gap-[15px]">
               <FontAwesomeIcon icon={faClock} color="#123" fontSize={25} />
               <h3 className="font-bold italic"> {t('Hours')}</h3>
               </div>
                               <span className="text-[18px]">{t('HoursPContact')}</span>
            </div>
            <div className="w-[300px] flex flex-col gap-[15px] items-center cards">
            <div className="w-full flex items-center justify-center gap-[15px]">
               <FontAwesomeIcon icon={faLocationDot} color="#123" fontSize={25} />
               <h3 className="font-bold italic">{t('Our Location')}</h3>
               </div>                <span className="text-center text-[18px]">{t('LocationPContact')}</span>
            </div>
        </section>
</main>

    )
}