import * as cardsApi  from '../../boot/helpers/cards'

/*
export function someAction (context) {
}
*/

export  async function list({commit}){
        const cards = cardsApi.getAllCards();
        commit('setCards', cards)
    }

