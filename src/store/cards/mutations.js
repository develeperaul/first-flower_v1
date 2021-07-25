import state from "../auth/state"

export function getHomeListSuccess(state, list){
    state.homeWeek = list[0][0];
    state.homeSale = list[1][0];
    state.homeNew = list[2];
}

export function getListSuccess(state, list){
    state.sectionName = list[0][0];
    state.cards = list[1]
}

export function setCards(state, cards){
        state.cards = cards
    }

export function getItemSuccess(state, card){
    
    state.card=card[0]
}

export function getFavorite(state, item){
    if(item === null){
        state.favorite = []
    }else {
        state.favorite = item
    }
}

export function addFavorite(state, item){
    // state.favorite = {...item}
    state.favorite = item
    // state.favorite.splice(state.favorite.length, 0,{...item} )
}

export function removeFavorite(state, item){
    state.favorite = item
}