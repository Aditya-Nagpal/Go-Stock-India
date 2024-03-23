import React from 'react'
import DiscussionCard from '../components/DiscussionCard'

export default function DiscussionForum() {
  let cards=[];
  for(let i=0;i<5;i++){
    cards.push(<DiscussionCard key={i} />);
  }
  return (
    <div className='overflow-scroll h-screen hide-scrollbar'>
      {cards}
    </div>
  )
}
