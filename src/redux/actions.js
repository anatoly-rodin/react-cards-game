import {
  OPEN_CARD,
  CHECK_CARDS,
  LOCK_CARDS,
  UNLOCK_CARDS
} from './actionTypes'

export function openCard(id) {
  return {
    type: OPEN_CARD,
    payload: id
  }
}

export function checkCards() {
  return {
    type: CHECK_CARDS
  }
}

export function lockCards() {
  return {
    type: LOCK_CARDS
  }
}

export function unlockCards() {
  return {
    type: UNLOCK_CARDS
  }
}
