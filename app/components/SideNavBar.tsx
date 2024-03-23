'use client'

import React,{useState,useEffect} from 'react';
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";
import { FaBell } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BsChatLeftTextFill } from "react-icons/bs";
import { isMobile, isBrowser } from 'react-device-detect';

export default function SideNavBar() {
    const ListItems=['Discussion Forum','Market Stories','Sentiment','Market','Sector','Watchlist','Events','News/Interview'];
    const [isOpen,setIsOpen]=useState(false);

    useEffect(() => {
        let sidenavbar=document.getElementById('sidenavbar');
        if(isMobile){
            sidenavbar?.classList.add('min-w-half');
            sidenavbar?.classList.add('-left-50vw');
        }
        else if(isBrowser){
            sidenavbar?.classList.add('-left-22vw');
            sidenavbar?.classList.add('min-w-22');
        }
    },[]);

    const toggleSidebar=() => {
        let sidenavbar=document.getElementById('sidenavbar');
        if(isMobile){
            if(!isOpen){
                sidenavbar?.classList.remove('-left-50vw');
                sidenavbar?.classList.add('left-0');
            } else{
                sidenavbar?.classList.remove('left-0');
                sidenavbar?.classList.add('-left-50vw');
            }
        } else if(isBrowser){
            const DiscussionForum=document.getElementById('discussion-forum');
            const MarketStories=document.getElementById('market-stories');
            if(!isOpen){
                if(DiscussionForum){
                    DiscussionForum.classList.remove('w-4/6');
                    DiscussionForum.classList.add('w-3/5');
                }
                if(MarketStories){
                    MarketStories.classList.remove('w-2/6');
                    MarketStories.classList.add('w-1/5');
                }
                sidenavbar?.classList.remove('-left-22vw')
                sidenavbar?.classList.add('left-0');
            } else{
                if(DiscussionForum){
                    DiscussionForum.classList.remove('w-3/5');
                    DiscussionForum.classList.add('w-4/6');

                }
                if(MarketStories){
                    MarketStories.classList.remove('w-1/5');
                    MarketStories.classList.add('w-2/6');
                }
                sidenavbar?.classList.remove('left-0');
                sidenavbar?.classList.add('-left-22vw');
            }
        }
        setIsOpen(!isOpen);
    }

  return (
    <main id='sidenavbar' className='fixed top-0 h-screen flex text-white'>
        <section className='min-w-full bg-sky-800'>
            <header className='py-4 pl-2 relative'>
                <span>
                    <img src='https://wallpapers-clan.com/wp-content/uploads/2022/07/anime-default-pfp-5.jpg' className='w-12 h-12 inline-block rounded-full mr-2'></img>
                    <span className='text-2xl align-middle font-semibold'>Hello, User</span>
                </span>
                <span className='align-middle absolute top-6 right-6'><FaBell className='inline-block text-3xl' /></span>
            </header>
            <ul>
                {
                    ListItems.map((item,index) => (
                        <li key={index} className='h-14 flex pr-2 sidenavbar-item-hover'>
                            <div className='w-1/5 flex justify-center items-center'>
                                {
                                    item === "Market Stories" ? (
                                        <HiCurrencyDollar className='text-3xl' />
                                    ):null
                                }
                                {
                                    item === "Discussion Forum" ? (
                                        <BsChatLeftTextFill className='text-2xl' />
                                    ):null
                                }
                            </div>
                            <div className='w-4/5 flex items-center justify-between font-semibold text-xl'>
                                {item}
                                {
                                    item === "Discussion Forum" ? (
                                        <VscTriangleDown className='inline-block' />
                                    ):null
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
        <section className='w-5 bg-transparent flex items-center'>
            <button className='w-full bg-sky-800 h-24 flex justify-center items-center text-white cursor-pointer' onClick={toggleSidebar}><VscTriangleRight className='text-3xl' /></button>
        </section>
    </main>
  )
}
