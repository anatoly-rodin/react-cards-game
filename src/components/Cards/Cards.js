import React from 'react'
import { useSelector } from 'react-redux'
import './Cards.scss'
import Card from '../Card/Card'

export default () => {
  const cards = useSelector(state => state.cards.cards)
  const round = useSelector(state => state.cards.round)

  function isEnd() {
    return cards.filter(card => card.open && card.guessed).length === cards.length
  }

  return (
    <div className='app-cards'>
      {
        !isEnd() &&
        <div className="container">
          <div className='app-cards__header text-center'>
            <h2>Round #{ round }</h2>
          </div>
          <div className="app-cards__grid">
            {
              cards.map((card) => <Card key={card.id} card={card} />)
            }
          </div>
        </div>
      }
      {
        isEnd() &&
        <div className='container'>
          <div className='app-cards__end'>
            <h2>That is all. Good job!</h2>
            <p>Your score - <strong>{round}</strong></p>
          </div>
        </div>
      }

    </div>
  )
}
