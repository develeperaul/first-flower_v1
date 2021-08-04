/*
export function someMutation (state) {
}
*/

export function confirm (state, payload) {
    // console.log(payload)
    state.code = payload
}

export function getPhone (state, payload) {
    state.phone = payload
}