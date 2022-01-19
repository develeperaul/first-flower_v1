/*
export function someMutation (state) {
}
*/
// export function add (state, card){
//     state.products.splice(state.products.length, 0,{...card, count: 1} )
// }


export function remove (state, card) {

    state.products = state.products.filter((item) => item.id.match(/\d+/g)[0] !== card.id);
}
export function addProduct (state, payload) {
    const cardItem = state.products.find(item => item.id === payload.id)
    if (payload.count)
        if (!cardItem) {
            state.products.push({ ...payload })
        }
        else {
            cardItem.count = payload.count
        }
    else {
        state.products.splice(state.products.length, 0, { ...payload, count: 1, id: `${payload.id}_0_1` })
    }

}

export function setBasket (state, items) {

    state.products.push(...items);

}

export function addCost(state, res){
    state.cost = res
}



export function incrementProducts (state, { id }) {
    const cartItem = state.products.find(item => item.id === id)
    cartItem.count++


    cartItem.id = cartItem.id.replace(/\d+$/g, String(cartItem.count))

}

export function decrementProducts (state, { id }) {
    const cartItem = state.products.find(item => item.id === id)
    cartItem.count--
    cartItem.id = cartItem.id.replace(/\d+$/g, String(cartItem.count))
    if (cartItem.count === 0) {
        removeProduct(state, id)
    }

}

export function removeProduct (state, id) {
    state.products = state.products.filter((item) => item.id !== id);
}


export function clear (state) {
    state.products = [];
}