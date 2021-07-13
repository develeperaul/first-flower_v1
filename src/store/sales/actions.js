import {getAllSale, getSale} from '../../boot/helpers/sales'

/*
export function someAction (context) {
}
*/

export  async function list({commit}){
        
        const sales = getAllSale();
        commit('setSales', sales)
    }

export async function getSaleCard({commit}, id){
    
    const sale = getSale(id);
    commit('setSale', sale)
}