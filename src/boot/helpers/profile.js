import { apiFlower } from "src/boot/ky";


export function getSmsCode(phone){
    
    return apiFlower.post("auth.php",  {json: {phone} }).json()
        
}

export function basket (ids){
    const requestURL = 'https://flowers.2apps.ru/api/basket.php';
    const http = new XMLHttpRequest();
    return new Promise(resolve=>{
        http.open('POST', requestURL, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onload = () => {
            console.log(resolve(http.response))
        }
        http.send(ids);
    })

    // return fetch( 'https://flowers.2apps.ru/api/basket.php', {
    //     method: 'POST',
    //     body: JSON.stringify(ids),
    //     headers: {
    //         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    //         'Content-Type': 'application/json',
    //         // "Content-Type": "text/plain"
            
    //     }
    // }).then(response =>{
    //     return response.json()
    // });

    // apiFlower.post("basket.php", {json: {ids}}).json()
    
}

export function sendOrder(obj){
    return apiFlower.post("post.php", {json: {obj} }).json()
}