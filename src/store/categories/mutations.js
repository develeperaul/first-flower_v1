/*
export function someMutation (state) {
}
*/

export function getSectionsSuccess(state, sections){
    state.sections = sections
}

export function getSubSectionSuccess(state, subSection){
    state.subSection = subSection
}

export function getSubSectionItemSuccess(state, subSectionItem){
    state.subSectionItem = subSectionItem
}

export function clickMenu(state){
    state.menu = !state.menu
}