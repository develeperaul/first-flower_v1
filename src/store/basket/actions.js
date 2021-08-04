import * as BasketAPI from "src/api/profile";

export async function order ({ getters }, list) {
  const ids = getters.ids;
  const token = localStorage.getItem("accessToken")
  const status = await BasketAPI.sendOrder(ids, list, token ? JSON.parse(token).token : null);
  console.log('order', status)
  return status
}

export async function addToCart ({ commit }, list) {
  const res = await BasketAPI.add(list);
  console.log(2);
  console.log(1, res);
  return res;
}

export async function sendBasket ({ commit }, list) {
  const sum = await basket(list);
  console.log(sum);
}

export async function addProductToCart ({ state, commit }, { ...product }) {
  commit("addProduct", product);
  localStorage.setItem("basket", JSON.stringify(state.products));
}

export async function removeProductCart ({ state, commit }, { ...product }) {
  commit("remove", product);
  localStorage.setItem("basket", JSON.stringify(state.products));
}

export async function incrementCount ({ commit, state }, product) {
  commit("incrementProducts", product);
  localStorage.setItem("basket", JSON.stringify(state.products));
}

export function decrementCount ({ commit, state }, product) {
  commit("decrementProducts", product);
  localStorage.setItem("basket", JSON.stringify(state.products));
}

export async function remove ({ commit, state }, { id }) {
  commit("removeProduct", id);
  localStorage.setItem("basket", JSON.stringify(state.products));
}

export function clearBasket ({ commit }) {
  commit("clear");
  localStorage.removeItem("basket");
}