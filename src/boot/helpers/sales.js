const sales = {
    1: {
        title: 'Купи букет из 19 роз, а получи 25 роз',
        text: '',
        img: '',
        color: '#ddece5'
    },
    2: {
        title: 'Купи букет из 19 роз, а получи 25 роз',
        text: '',
        img: '',
        color: '#ce406a'
    }
}

function getAllSale() {
  return Object.values(sales);
}

export {getAllSale}