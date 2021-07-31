import state from "../auth/state";
import Vue from "vue";

export function getHomeListSuccess(state, list) {
  state.homeWeek = list[0][0];
  state.homeSale = list[1][0];
  state.homeNew = list[2];
}

export function getListSuccess(state, list) {
  state.sectionName = list[0][0];
  state.cards = list[1];
}

export function setCards(state, cards) {
  state.cards = cards;
}

export function getItemSuccess(state, card) {
  state.card = card[0];
}

export function setFavorites(state, items) {
  //добавляем карточку в избранные
  state.favorite = items;
}

export function getFavorite(state, item) {
  if (item === null) {
    state.favorite = [];
  } else {
    state.favorite = item;
  }
}

export function addFavorite(state, id) {

  if (state.favorite === null) state.favorite = {};
  Vue.set(state.favorite, id, true);
  
}

export function removeFavorite(state, id) {
  
  if (state.favorite === null) return;
  if (id in state.favorite) Vue.delete(state.favorite, id);
  if(Object.keys(state.favorite).length === 0) state.favorite = null
}
