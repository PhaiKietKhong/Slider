import React, { useEffect, useRef, useState } from 'react'
import './Slider.css'
import rain from '../../assets/rain.jpg'
import night from '../../assets/night.jpg'
import mountain from '../../assets/mountain.jpg'
import dawn from '../../assets/dawn.jpg'
import snow from '../../assets/snow.jpg'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const Slider = () => {
    const[index,setIndex]= useState(1)

    const handleNext = ()=>{
        const listItem = document.querySelector('.list');
        const currentDot = document.querySelector(`.dots li:nth-child(${index})`)
        const NextDot = document.querySelector(`.dots li:nth-child(${index+1})`)
        const firstDot = document.querySelector(`.dots li:nth-child(1)`) 
        if(index < 5){
            const itemWidth = document.querySelector('.item').offsetWidth;
            const currentOffset = parseFloat(listItem.style.left) || 0;
            const newPosition = currentOffset - itemWidth;
            listItem.style.left = newPosition + 'px';
            currentDot.classList.remove('active')
            NextDot.classList.add('active')
            setIndex(pre=> pre+1)
        }else{
            listItem.style.left = 0;
            setIndex(1)
            currentDot.classList.remove('active')
            firstDot.classList.add('active')
        }

    }
    
    const handlePre = ()=>{
        const listItem = document.querySelector('.list');
        const itemWidth = document.querySelector('.item').offsetWidth;
            const currentDot = document.querySelector('.dots li.active');
            const NextDot = document.querySelector(`.dots li:nth-child(${index-1})`)
            const lastDot = document.querySelector(`.dots li:nth-child(5)`) 
        if(index > 1){
            const currentOffset = parseFloat(listItem.style.left) || 0;
            const newPosition = currentOffset + itemWidth;
            listItem.style.left = newPosition  + 'px';
            currentDot.classList.remove('active')
            NextDot.classList.add('active')
            setIndex(pre=> pre-1)
        }else{
            listItem.style.left =-( 4 * itemWidth)+'px';
            currentDot.classList.remove('active')
            lastDot.classList.add('active')
            setIndex(5)
        }
    }
    useEffect(()=>{

    },)

  return (
    <div className='slider'>
        <div className="list">
            <div className="item">
                <img src={rain} alt="" />
            </div>
            <div className="item">
                <img src={night} alt="" />
            </div>
            <div className="item">
                <img src={snow} alt="" />
            </div>
            <div className="item">
                <img src={dawn} alt="" />
            </div>
            <div className="item">
                <img src={mountain} alt="" />
            </div>
        </div>
        <div className="button">
             <MdNavigateNext onClick={()=> handleNext()} className='next-btn' />
             <GrFormPrevious onClick={()=> handlePre()} className='pre-btn' />
        </div>
        <ul className='dots'>
            <li className='active'></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  )
}

export default Slider
