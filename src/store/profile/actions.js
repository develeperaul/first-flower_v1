/*
export function someAction (context) {
}
*/

import { getProfile, getSmsCode, token, updateProfile  } from "src/api/profile";

export async function getSms ({ commit }, phone) {
  // console.log(phone)
  const res = await getSmsCode(phone);
  commit('confirm', res)

}

export async function getToken ({ commit }, obj) {
  // console.log(obj)
  const res = await token(obj)
  localStorage.setItem("accessToken", JSON.stringify({ token: res.token, phone: res.phone }))

  commit("getPhone", JSON.parse(localStorage.getItem("accessToken")).phone)
  return res
}

export async function clientData({commit}, token) {
    // commit('addClientData', {name:null,last_name:null, phone: null})
    const res = await getProfile(token);
    // console.log(res)
    commit('addClientData', res)
    return res
}

export async function updateClientData({dispatch}, obj) {
    // commit('addClientData', {name:null,last_name:null, phone: null})
    const {token} = obj;
    const res = await updateProfile(obj);
    dispatch('clientData', token)
    
    
}