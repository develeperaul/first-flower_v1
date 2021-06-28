import * as salesApi  from '../../boot/helpers/sales'

/*
export function someAction (context) {
}
*/

export  async function list({commit}){
        const sales = salesApi.getAllSale();
        commit('setSales', sales)
    }
