/*
export function someMutation (state) {
}
*/

export function addSouvenirs(state, {candies, postcard, toys }){
    state.candies = candies
    state.postcard = postcard
    state.toys = toys
}
