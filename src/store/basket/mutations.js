/*
export function someMutation (state) {
}
*/
export function add (state, card){
    state.products.splice(state.products.length, 0,{...card, count: 1} )
}


export function remove (state, card){
    state.products = state.products.filter((item) => item.id !== card.id);
}
export function addProduct (state, payload){
    state.products.push({...payload, count: 1})
}

export function incrementProducts (state, {id}){
    const cartItem = state.products.find(item => item.id === id)
    cartItem.count++
}

export function decrementProducts (state, {id}){
    const cartItem = state.products.find(item => item.id === id)
    cartItem.count--
    if(cartItem.count === 0){
        removeProduct(state, id)
    }
    
}

export function removeProduct(state, id){
    state.products = state.products.filter((item) => item.id !== id);
}