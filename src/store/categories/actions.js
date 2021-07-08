import {getCategories}  from '../../boot/helpers/cards'
import {getSectionsList, getSubSection}  from '../../boot/helpers/cards'

/*
export function someAction (context) {
}
*/

export async function getList({commit}){
    
    const sections = await getSectionsList();
    
    commit('getSectionsSuccess', sections)
    
}

export async function getSubSectionList({commit}, id){
    const subSection = await getSubSection(id)
    commit('getSubSectionSuccess', subSection)
}
