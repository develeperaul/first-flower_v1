/*
export function someAction (context) {
}
*/
export async function addProductToCart ({state, commit}, {...product}){
     
        commit('addProduct', product)
        localStorage.setItem("basket", JSON.stringify(state.products))
    
    
}

export async function removeProductCart({state, commit}, {...product}){
    commit('remove', product);
    localStorage.setItem("basket", JSON.stringify(state.products))
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



