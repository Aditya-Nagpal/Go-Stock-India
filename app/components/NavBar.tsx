'use client'

import Link from "next/link"
import { useEffect } from "react"
import { isMobile } from "react-device-detect"

export default function NavBar() {
  useEffect(() => {
    let DiscussNav=document.getElementById('discuss-nav');
    let MarketNav=document.getElementById('market-nav');
    if(window.location.pathname === '/discussion-forum'){
      const toAdd=['border-b-4','border-b-red-600','bg-sky-950'];
      DiscussNav?.classList.add(...toAdd);
      MarketNav?.classList.add('bg-sky-800')
    } else if(window.location.pathname === '/market-stories'){
      const toAdd=['border-b-4','border-b-red-600','bg-sky-950'];
      MarketNav?.classList.add(...toAdd);
      DiscussNav?.classList.add('bg-sky-800')
    }
  },[]);

  const DiscussOnClick=() => {
    let DiscussNav=document.getElementById('discuss-nav');
    let MarketNav=document.getElementById('market-nav');
    const toAdd=['border-b-4','border-b-red-600','bg-sky-950'];
    const toRemove=['border-b-4','border-b-red-600','bg-sky-950'];
    if(window.location.pathname === '/market-stories'){
      MarketNav?.classList.remove(...toRemove);
      DiscussNav?.classList.add(...toAdd);
      MarketNav?.classList.add('bg-sky-800');
    }
  };

  const MarketOnClick=() => {
    let DiscussNav=document.getElementById('discuss-nav');
    let MarketNav=document.getElementById('market-nav');
    const toAdd=['border-b-4','border-b-red-600','bg-sky-950'];
    const toRemove=['border-b-4','border-b-red-600','bg-sky-950'];
    if(window.location.pathname === '/discussion-forum'){
      DiscussNav?.classList.remove(...toRemove);
      MarketNav?.classList.add(...toAdd);
      DiscussNav?.classList.add('bg-sky-800');
    }
  };

  return (
    <>
      {
        isMobile ? (
          <div className='h-20 flex'>
            <div id="discuss-nav" className="w-2/4 flex justify-center box-border items-center text-2xl text-white font-semibold tracking-wide text-center border-l-8 border-l-black border-r border-r-white">
              <Link href='/discussion-forum' onClick={DiscussOnClick}>Discussion Forum</Link>
            </div>
            <div id="market-nav" className="w-2/4 flex justify-center box-border items-center text-2xl text-white font-semibold tracking-wide text-center border-r-8 border-r-black border-l border-l-white">
              <Link href='/market-stories' onClick={MarketOnClick}>Market Stories</Link>
            </div>
          </div> 
        ) : null
      }
    </>
  )
}
