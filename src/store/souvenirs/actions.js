import * as souvenirsApi  from '../../boot/helpers/souvenirs'

export async function createSouvenirs({commit}){
    const candies = souvenirsApi.getAllcandies();
    const postcard = souvenirsApi.getAllpostcard();
    const toys = souvenirsApi.getAlltoys();
}

/*
export function someAction (context) {
}
*/
