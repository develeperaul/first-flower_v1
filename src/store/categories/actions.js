import {getCategories}  from '../../boot/helpers/cards'

/*
export function someAction (context) {
}
*/

export async function getList({commit,state}){
    const categories = getCategories();
    
    commit('setCategories', categories)
    console.log(state.categories)
}
