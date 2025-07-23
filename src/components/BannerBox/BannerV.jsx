import React from 'react'
import "../BannerBox/style.css"
import { Link } from 'react-router-dom'

const BannerV=(props)=> {
  return (
    <div className='BannerBoxV2 w-full overflow-hidden rounded-md group relative'>
        <img src={props.image} alt="Banner" className='w-full h-auto transition-all duration-150 group-hover:scale-105'/>
    
        <div className={`info absolute p-3 sm:p-5 top-0 ${props.info === "left" ? 'left-0' : 'right-0'} w-[95%] sm:w-[70%] h-full  flex items-center justify-center flex-col gap-2
        ${props.info === "left" ? "" : 'pl-2 sm:pl-12'}`}>
            <h2 className='text-[11px] max-[400px]:text-[10px] sm:text-[15px] font-semibold text-center sm:text-left leading-tight'>{props.title}</h2>
            <span className='text-[14px] sm:text-[20px] text-[#ff5252] font-semibold w-full text-center sm:text-left'>{props.price}</span>

            <div className='w-full text-center sm:text-left'>
                <Link to={props.link||"/"} className='text-[13px] sm:text-[16px] font-semibold link underline'>SHOP NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default BannerV