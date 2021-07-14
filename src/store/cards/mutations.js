import state from "../auth/state"

export function getHomeListSuccess(state, list){
    state.homeWeek = list[0];
    state.homeSale = list[1];
    state.homeNew = list[2];
}

export function getListSuccess(state, cards){
    state.cards = cards;
}

export function setCards(state, cards){
        state.cards = cards
    }

export function getItemSuccess(state, card){
    
    state.card=card[0]
}

