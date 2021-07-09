import * as cardsApi  from '../../boot/helpers/cards'
import {getElementList}  from '../../boot/helpers/cards'
/*
export function someAction (context) {
}
*/

export async function getList({commit}, id){
    const cards = await getElementList(id);
    commit('getListSuccess', cards);
}

export  async function list({commit}){
        const cards = cardsApi.getAllCards();
        commit('setCards', cards)
    }

export  async function cardList({commit}, name){
        const cards = cardsApi.sort(name);
        commit('setCards', cards)
    }


export  async function getCard({commit}, id){
        const card = cardsApi.findCard(id);
        commit('setCard', card)
    }
