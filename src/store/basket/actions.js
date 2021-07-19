/*
export function someAction (context) {
}
*/
export async function addProductToCart ({state, commit}, {...product}){
     
        commit('addProduct', product)
    
    
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

