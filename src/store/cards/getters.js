/*
export function someGetter (state) {
}
*/

export function weekItem(state){
    return state.homeWeek[0]
}

export function saleItem(state){
    return state.homeSale[0]
}

export function newList(state){

    return state.homeNew
}
export function cards (state){
    return state.cards
}

export function card (state){

    return state.card
}