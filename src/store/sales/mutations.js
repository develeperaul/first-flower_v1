
export function setSales (state, sales) {
    state.sales = sales
    state.isLoading = false
}



export function setSale (state, sale) {
    state.sale = sale[0]
    state.isLoading = false
}

export function clear (state) {
    state.sale = null
}
