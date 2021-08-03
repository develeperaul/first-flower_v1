/*
export function someAction (context) {
}
*/

import {getSmsCode} from "../../boot/helpers/profile"

export async function  getSms({commit},phone){
    
  const sms = await getSmsCode(phone)
  
}



