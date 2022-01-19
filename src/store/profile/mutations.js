/*
export function someMutation (state) {
}
*/

export function confirm (state, payload) {
    // console.log(payload)
    state.code = payload
}

// export function getPhone (state, payload) {
//     state.phone = payload
// }

export function addClientData(state,obj){
    if(obj.length != 0){
        state.phone = obj.phone;
        state.name = obj.name;
        state.last_name = obj.last_name
        state.auth = true
    }


}