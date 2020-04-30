import { OPEN_CARD } from './actionTypes'
import {
  checkCards,
  lockCards,
  unlockCards
} from './actions'

let cardsCounter = 0

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function checkMiddleware({ dispatch }) {
  return (next) => {
    return async (action) => {
      if (action.type === OPEN_CARD) cardsCounter += 1

      if (cardsCounter === 2) {
        cardsCounter = 0
        timeout(0)
          .then(() => {
            dispatch(lockCards())
            return timeout(300)
          })
          .then(() => {
            dispatch(checkCards())
            return timeout(100)
          })
          .finally(() => {
            dispatch(unlockCards())
          })
      }

      return next(action)
    }
  }
}
