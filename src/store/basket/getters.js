/*
export function someGetter (state) {
}
*/
export function amountProducts (state) {
    return state.products.reduce(function (sum, item) {
        return sum + (item.price * item.count)
    }, 0)
}

export function products (state) {
    return state.products
}

export function ids (state) {
    return state.products.map(item => item.id)
}