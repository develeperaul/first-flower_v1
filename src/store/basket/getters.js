/*
export function someGetter (state) {
}
*/
export function amountProducts(state){
    return state.products.reduce(function(sum, item){
        return sum + (item.price*item.count)
    },0)
}