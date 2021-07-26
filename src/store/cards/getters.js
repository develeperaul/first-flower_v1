/*
export function someGetter (state) {
}
*/

export function weekItem(state) {
  return state.homeWeek;
}

export function saleItem(state) {
  return state.homeSale;
}

export function newList(state) {
  return state.homeNew;
}
export function cards(state) {
  // console.log(state.cards.length )
  return state.cards;
}

export function listName(state) {
  return state.sectionName.section_name;
}

export function card(state) {
  return state.card;
}

export function favorite(state) {
  return state.favorite;
}
