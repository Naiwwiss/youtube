import React from 'react'
import Cards from './cards'
import { cards } from './data'

export default function CardList() {
  return (
    <div>
    {cards.map((item,key)=> <Cards item={item} key={key}/>)}
    </div>
  )
}
