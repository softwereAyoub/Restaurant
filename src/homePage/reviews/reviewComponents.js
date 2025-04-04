import React from "react"


export default function ReviewsCom(props){
    return(
      <div className="w-[50%] max-sm:w-[100%] bg-gray-100 p-[20px] flex flex-col gap-[15px] rounded-[8px] mx-auto">
<div className="flex justify-between items-center">



<div className="flex flex-col items-center">

<div className="flex gap-[10px]">

<img className="w-[55px] h-[55px] border-[2px] rounded-full" src={props.image}/>


<div className="flex flex-col ">
<span className="text-[18px] font-bold">{props.title} </span>
<span className="text-gray-600 text-[15px]">{props.date}</span>
</div>


</div>

</div>
<img className="max-w-[40px]" src={require('../../images/google.webp')}/>

</div>
<div className="flex items-center gap-[10px]">
<img className="max-w-[90px]" src={require('../../images/etoile.webp')}/>
<img className="max-w-[20px]" src={require('../../images/check.webp')}/>
</div>
<p className="font-semibold p-[10px]">{props.reviews}</p>
      </div>
    )
}