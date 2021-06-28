/*
export function someAction (context) {
}
*/
export async function addProductToCart ({state, commit}, product){
    const productItem = state.products.find(item=>item.id === product.id)
    if(!productItem){
        commit('addProduct', product)
    }
    else {
        commit('incrementProducts', productItem)
    }
    
}

export async function incrementCount({commit}, product){
    commit('incrementProducts', product)
}

export function decrementCount({commit}, product){
    commit('decrementProducts', product)
}

export  async function remove({ commit }, { id }) {
    commit('removeProduct', id);
  }

