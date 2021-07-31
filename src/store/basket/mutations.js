/*
export function someMutation (state) {
}
*/
// export function add (state, card){
//     state.products.splice(state.products.length, 0,{...card, count: 1} )
// }


export function remove (state, card){
    
    state.products = state.products.filter((item) => item.id.match(/[\d]+[^_]/g).join() !== card.id);
}
export function addProduct (state, payload){
    console.log(payload.count ? true : false)
    const cardItem = state.products.find(item => item.id === payload.id)
    console.log(payload.id)
    if(payload.count)    
        if(!cardItem){
            state.products.push({...payload})    
        }
        else{
            cardItem.count = payload.count
        }
    else {
        state.products.splice(state.products.length, 0,{...payload, count: 1, id: `${payload.id}_0`} )
    }
    
}

export function setBasket(state, items){
    
    state.products.push(...items);
    
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
