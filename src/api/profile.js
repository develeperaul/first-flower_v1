import { serverAPI } from "src/api/helpers/ky";

export function getSmsCode (phone) {
  const formData = new FormData();
  formData.append('phone', phone);
  return serverAPI
    .post("auth.php", { body: formData })
    .json()
  //{"theme":"has_acc","phone":"9656656740","kod":"3377"}
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

export function sendOrder (ids, { delivery, name, phone, date, time, comment, payment }, token) {
  const formData = new FormData();
  ids.reduce((acc, id, index) => {
    acc.append(`ids[${index}]`, id);
    return acc;
  }, formData);

  formData.append('delivery', delivery);
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('date', date);
  formData.append('time', time);
  formData.append('comment', comment)
  formData.append('payment', payment);
  token ? formData.append('token', token) : null;
  return serverAPI
    .post("order.php", {
      body: formData
    })
    .json()
  // return serverAPI.post("post.php", {json: {obj} }).json()
}


