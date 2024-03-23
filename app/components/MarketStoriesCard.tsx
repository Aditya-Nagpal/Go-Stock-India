'use client'

import React, {useEffect} from 'react'
import { isMobile, isBrowser } from 'react-device-detect'

export default function MarketStoriesCard() {
  useEffect(() => {
    let elements=document.getElementsByClassName('market-card');
    if(isBrowser){
      for(let i=0;i<elements.length;i++){
        elements[i].classList.add('w-4/5');
      }
    }
  },[]);
  return (
    <main className='market-card min-h-44 mt-6 mb-16 mx-auto'>
      <section className='h-36'>
        <img src='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg' className='h-full w-full'></img>
      </section>
      
      <section className='h-1/5 py-2.5 px-4'>
        <p className='text-xl font-bold'><b>The Coldest Sunset</b></p>
        <p className='text-lg'>Lorem Ipsum dolor sit amet, consectetur adipisicing edit. Voluptatibus quia, nullal Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      </section>
    </main>
  )
}
