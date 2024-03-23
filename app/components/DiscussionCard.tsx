import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

export default function DiscussionCard() {
  return (
    <main className='discuss-card-width min-h-36 mx-auto mt-8 mb-16 card-box-shadow flex'>
      <section className='w-1/5 h-full box-border flex justify-center pt-2'>
        <img src='https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-5.jpg' className='w-5/6 h-4/6 round'></img>
      </section>
      <section className='w-4/5 pl-4'>
        <div>
          <p><b className='text-lg'>Lorem Ipsum</b>&emsp;<span className='text-white bg-blue-500 p-2 rounded-2xl'>sector 2</span><span className='float-right pr-8 text-blue-400 font-bold'>2 min ago</span></p><br></br>
          <p className='font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <ul className='flex justify-between py-5 pr-5'>
          <li><CiHeart className='inline-block text-xl align-sub' /> 2k</li>
          <li><FaRegEye className='inline-block text-xl align-sub' /> 2k</li>
          <li><CiChat1 className='inline-block text-xl align-sub' /> 2k Comments</li>
          <li><IoShareSocialOutline className='inline-block text-xl align-sub' /> Share</li>
        </ul>
      </section>
    </main>
  )
}
