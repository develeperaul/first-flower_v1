/*
export function someAction (context) {
}
*/

// import authApi from '../../boot/helpers/auth';




export  function getProfile ({commit}){
    return new Promise(resolve =>{
        commit('getProfileStart')
        authApi
        .getUser()
        .then(response=>{
            commit('getProfileSuccess', response)
            resolve(response)
        }).catch(()=>{
            commit('getProfileFailure')
            console.log('ошибка')
        })
    })
}

export function outProfile ({commit}){
    return new Promise(resolve =>{
        authApi
        .outUser()
        .then(()=>{
            commit('outProfileSuccess')
          
        }).catch((e)=>{
          
            console.log(e)
        })
    })
}

