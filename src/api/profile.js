import { serverAPI, serverGeocodeApi } from "src/api/helpers/ky";

export function getAddress (city, street, home) {
  return serverGeocodeApi(`&geocode=${city},улица+${street},дом+${home}&rspn=1&ll=54.5893840,55.3824710&spn=1.44,1.44`).json()
}

export function getSmsCode (phone) {
  const formData = new FormData();
  formData.append('phone', phone);
  return serverAPI
    .post("auth.php", { body: formData })
    .json()
}

export function token ({ phone, kod }) {
  const formData = new FormData();
  formData.append('phone', phone);
  formData.append('kod', kod);
  return serverAPI
    .post("get_token.php", {
      body: formData
    })
    .json()
}

export function add (ids) {
  const formData = new FormData();
  ids.reduce((acc, id, index) => {
    acc.append(`ids[${index}]`, id);
    return acc;
  }, formData);

  return serverAPI
    .post("basket.php", {
      body: formData
    })
    .json();
}

export function sendOrder (ids, { delivery, name, phone, comment_user, date, time, comment, payment, cost }, token) {
  const formData = new FormData();
  ids.reduce((acc, id, index) => {
    acc.append(`ids[${index}]`, id);
    return acc;
  }, formData);

  formData.append('delivery', delivery);
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('comment_user', comment_user)
  formData.append('date', date);
  formData.append('time', time);
  formData.append('comment', comment)
  formData.append('payment', payment);
  formData.append('delivery_cost', cost)
  token ? formData.append('token', token) : null;
  return serverAPI
    .post("order.php", {
      body: formData
    })
    .json()
  // return serverAPI.post("post.php", {json: {obj} }).json()
}


