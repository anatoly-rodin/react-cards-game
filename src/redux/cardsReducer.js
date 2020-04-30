import {
  CHECK_CARDS,
  OPEN_CARD,
  LOCK_CARDS,
  UNLOCK_CARDS
} from './actionTypes'

const initCards = [
  {id: 1, color: '#AACCCC', open: false, disabled: false, guessed: false},
  {id: 2, color: '#AACCCC', open: false, disabled: false, guessed: false},
  {id: 3, color: '#EEDDCC', open: false, disabled: false, guessed: false},
  {id: 4, color: '#EEDDCC', open: false, disabled: false, guessed: false},
  {id: 5, color: '#AABBCC', open: false, disabled: false, guessed: false},
  {id: 6, color: '#AABBCC', open: false, disabled: false, guessed: false},
  {id: 7, color: '#AAEECC', open: false, disabled: false, guessed: false},
  {id: 8, color: '#AAEECC', open: false, disabled: false, guessed: false},
  {id: 9, color: '#DDCCCC', open: false, disabled: false, guessed: false},
  {id: 10, color: '#DDCCCC', open: false, disabled: false, guessed: false},
  {id: 11, color: '#FFCCCC', open: false, disabled: false, guessed: false},
  {id: 12, color: '#FFCCCC', open: false, disabled: false, guessed: false},
  {id: 13, color: '#FFAACC', open: false, disabled: false, guessed: false},
  {id: 14, color: '#FFAACC', open: false, disabled: false, guessed: false},
  {id: 15, color: '#FFDDCC', open: false, disabled: false, guessed: false},
  {id: 16, color: '#FFDDCC', open: false, disabled: false, guessed: false},
]

const initialState = {
  cards: shuffle([...initCards]),
  round: 1,
  openedCards: []
}

function shuffle(a) {
  let j, x, i;

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }

  return a;
}

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CARD:
      let opened

      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.id === action.payload) {
            card.open = true
            opened = card
          }
          return card
        }),
        openedCards: [...state.openedCards, opened]
      }
    case CHECK_CARDS:
      let cards = [...state.cards]
      let openedCard = [...state.openedCards]
      let round = state.round

      if (openedCard[0].color === openedCard[1].color) {
        let ids = openedCard.map(card => card.id)

        cards = state.cards.map(card => {
          if (ids.includes(card.id)) {
            card.guessed = true
          }
          return card
        })
      } else {
        cards = state.cards.map(card => {
          if (card.open && !card.guessed) {
            card.open = false
          }
          return card
        })
        round += 1
      }

      return {
        ...state,
        cards,
        round,
        openedCards: []
      }
    case LOCK_CARDS:
      return {
        ...state,
        cards: state.cards.map(card => {
          card.disabled = true
          return card
        })
      }
    case UNLOCK_CARDS:
      return {
        ...state,
        cards: state.cards.map(card => {
          card.disabled = false
          return card
        })
      }
    default:
      return state
  }

  return state
}
