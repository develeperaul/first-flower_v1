import { serverAPI } from "src/api/helpers/ky";

export function getSmsCode(phone) {
  return serverAPI.post("auth.php", { json: { phone } }).json();
}

export function add(ids) {
  const formData = new FormData();
  ids.reduce((acc, id, index) => {
    console.log(index);
    acc.append(`ids[${index}]`, id);
    return acc;
  }, formData);

  return serverAPI
    .post("basket.php", {
      body: formData
    })
    .json();
}

export function sendOrder(obj) {
  // return serverAPI.post("post.php", {json: {obj} }).json()
}
