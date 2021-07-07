/*
export function someMutation (state) {
}
*/

export  function getProfileStart(state){
    state.id = null
    state.currentUser = null
    state.isLoading = true
}

export function getProfileSuccess(state, {id, currentUser}){
    state.id = id
    state.currentUser = currentUser
    state.isLoading = false
}

export function getProfileFailure(state){
    state.id = null
    state.currentUser = null
    state.error = null
}

export function outProfileSuccess(state){
    state.id = null
    state.currentUser = null
}