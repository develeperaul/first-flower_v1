 const sales = {
    1: {
        id:1,
        name: 'Розы в подарок',
        title: 'Купи букет из 19 роз, а получи 25 роз',
        text: 'Закажите букет из 19 красных роз и вы получите 25 шт по цене 19 роз.',
        img: '',
        color: '#ddece5'
    },
    2: {
        id:2,
        name: 'Розы в подарок',
        title: 'Купи букет из 19 роз, а получи 25 роз',
        text: 'Закажите букет из 19 красных роз и вы получите 25 шт по цене 19 роз.',
        img: '',
        color: '#ECDDE2'
    }
}

function getAllSale() {
  return Object.values(sales);
}

function getSale(id){
    return Object.values(sales).find(item=>item.id == id )
}

export {getAllSale, getSale}