/*
export function someAction (context) {
}
*/

import { getSmsCode, token } from "src/api/profile";

export async function getSms ({ commit }, phone) {
  console.log(phone)
  const res = await getSmsCode(phone);
  commit('confirm', res)

}

export async function getToken ({ commit }, obj) {

  const res = await token(obj)
  localStorage.setItem("accessToken", JSON.stringify({ token: res.token, phone: res.phone }))

  commit("getPhone", JSON.parse(localStorage.getItem("accessToken")).phone)
}
