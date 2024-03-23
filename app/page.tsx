'use client'

import { isMobile } from "react-device-detect";
import DiscussionForum from './discussion-forum/page'
import MarketStories from "./market-stories/page";

export default function Home() {
  if(isMobile){
    window.location.replace('/discussion-forum');
  }

  return (
    <>
      <main className="flex flex-row-reverse">
      <section id="market-stories" className="w-2/6">
          <h2 className="w-52 bg-gray-200 uppercase text-2xl text-red-500 font-semibold text-center py-2 px-1 mt-2.5 ml-12">Market Stories</h2>
          <MarketStories />
        </section>
        <section id="discussion-forum" className="w-4/6 pl-8">
          <h2 className="w-96 bg-gray-200 uppercase text-4xl text-red-500 font-semibold text-center py-2 ml-3.5">Discussion Forum</h2>
          <DiscussionForum />
        </section>
      </main>
    </>
  )
}
