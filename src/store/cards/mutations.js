import state from "../auth/state"

export function getListSuccess(state, cards){
    state.cards = cards;
}

export function setCards(state, cards){
        state.cards = cards
    }

export function setCard(state, card){
    state.card = card
}