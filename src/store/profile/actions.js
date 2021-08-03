/*
export function someAction (context) {
}
*/

import { getSmsCode } from "src/api/profile";

export async function getSms({ commit }, phone) {
  const sms = await getSmsCode(phone);
}
