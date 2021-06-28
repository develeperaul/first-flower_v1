/*
export function someMutation (state) {
}
*/

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
}

export function removeProduct(state, id){
    state.products = state.products.filter((item) => item.id !== id);
}