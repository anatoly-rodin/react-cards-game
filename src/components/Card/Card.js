import React from 'react'
import './Card.scss'
import { useDispatch } from 'react-redux'
import { openCard } from '../../redux/actions'

export default ({ card }) => {
  const dispatch = useDispatch()
  const styles = {
    background: card.color
  }

  return (
    <div className={`app-card ${ card.disabled ? 'locked' : ''} `}>
      <div className={`app-card__body shadow ${ card.open ? 'open' : '' }`}>
        <div
          className='app-card__front'
          onClick={() => dispatch(openCard(card.id))}
        />
        <div
          className='app-card__back'
          style={styles}
        />
      </div>
    </div>
  )
}
