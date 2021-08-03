import { apiFlower } from "src/api/helpers/ky";

let users = {
    id: 123,
    currentUser: '9999999999'
}

const user = null
const  getUser  = async () =>{

    return users;
}
const outUser = async () =>{

    return users = null

}

export default {
    getUser,
    outUser
}
