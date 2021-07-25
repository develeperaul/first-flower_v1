import * as cardsApi  from '../../boot/helpers/cards'
import {getElementList, getElementItem, getHomeList, findCard}  from '../../boot/helpers/cards'
/*
export function someAction (context) {
}
*/
export async function actionHomeList({commit}){
    const list = await getHomeList();
    commit('getHomeListSuccess', list);
    return list
}


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
    
        const card = await getElementItem(id);
        commit('getItemSuccess', card)
    }


export async function getFavoriteList({commit}){
    //получаем список избранных
    // const listFavorite
    
}

export function addFavoriteItem({commit}, item){
    //добавляем карточку в избранные
    let getList = JSON.parse(window.localStorage.getItem('favorite'))
    if(getList == null) getList = [];
    window.localStorage.setItem('favorite', JSON.stringify({isActive:true, ...item}))
    getList.push({isActive:true, ...item})
    window.localStorage.setItem('favorite', JSON.stringify(getList))
    
    commit('addFavorite', JSON.parse(window.localStorage.getItem('favorite')))
    
}


export function removeFavoriteItem({commit}, item){
    // console.log(item.id)
    let newFavorite = []
    JSON.parse(window.localStorage.getItem('favorite')).forEach(function(i){
        if(i.id == item.id) return 
        else return newFavorite.push(i)
    })

    window.localStorage.setItem('favorite', JSON.stringify(newFavorite))
    commit('removeFavorite', JSON.parse(window.localStorage.getItem('favorite')))
}
export  function getFavorite({commit}){
//    return JSON.parse(window.localStorage.getItem('favorite'))
    
   commit('getFavorite', JSON.parse(window.localStorage.getItem('favorite')))
}

