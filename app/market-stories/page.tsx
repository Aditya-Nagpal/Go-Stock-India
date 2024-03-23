import React from 'react'
import MarketStoriesCard from '../components/MarketStoriesCard';

export default function MarketStories() {
  let cards=[];
  for(let i=0;i<5;i++){
    cards.push(<MarketStoriesCard key={i} />);
  }
  return (
    <div className='overflow-scroll h-screen hide-scrollbar'>
      {cards}
    </div>
  )
}
