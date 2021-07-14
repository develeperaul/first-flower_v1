import {getSaleList, getSaleItem,  getAllSale, getSale} from '../../boot/helpers/sales'

/*
export function someAction (context) {
}
*/
export  async function actionSaleList({commit}){
        
        const list = await getSaleList();
        commit('setSales', list)
    }

export async function actionSaleItem({commit}, id){
    
    const item = await getSaleItem(id);
    commit('setSale', item)
}


// export  async function list({commit}){
        
//         const sales = getAllSale();
//         commit('setSales', sales)
//     }

// export async function getSaleCard({commit}, id){
    
//     const sale = getSale(id);
//     commit('setSale', sale)
// }