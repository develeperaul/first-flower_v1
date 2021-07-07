
export function setSales(state, sales){
        state.sales = sales
        state.isLoading = false
    }

export function getSaleStart(state){
    state.isLoading = true
    state.sales = null
    state.sale = null
}

    export function setSale(state, sale){
        state.sale = sale
        state.isLoading = false
    }
