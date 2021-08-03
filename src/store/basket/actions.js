import * as BasketAPI from "src/api/profile";

export async function order({ commit, getters }, list) {
  const ids = getters.products;
  const status = await sendOrder({ ids, ...list });
}

export async function addToCart({ commit }, list) {
  const res = await BasketAPI.add(list);
  console.log(2);
  console.log(1, res);
  return res;
}

export async function sendBasket({ commit }, list) {
  const sum = await basket(list);
  console.log(sum);
}

export async function addProductToCart({ state, commit }, { ...product }) {
  commit("addProduct", product);
  localStorage.setItem("basket", JSON.stringify(state.products));
}

export async function removeProductCart({ state, commit }, { ...product }) {
  commit("remove", product);
  localStorage.setItem("basket", JSON.stringify(state.products));
}

export async function incrementCount({ commit }, product) {
  commit("incrementProducts", product);
}

export function decrementCount({ commit }, product) {
  commit("decrementProducts", product);
}

export async function remove({ commit }, { id }) {
  commit("removeProduct", id);
}
