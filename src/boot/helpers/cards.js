const cards = {
    1: {
        id: 1,
        title: 'Букет из 51 розы Кения',
        slug: '',
        img: '../assets/flower.jpg',
        price: '2790руб'
    },
    2: {
        id: 2,
        title: 'Букет из 51 розы Кения',
        slug: '',
        img: 'src/assets/flower.jpg',
        price: '2790руб'
    },
    3: {
        id: 3,
        title: 'Букет из 51 розы Кения',
        slug: '',
        img: 'src/statics/flower.jpg',
        price: '2790руб'
    },
    4: {
        id: 4,
        title: 'Букет из 51 розы Кения',
        slug: '',
        img: 'src/statics/flower.jpg',
        price: '2790руб'
    },
    5: {
        id: 5,
        title: 'Букет из 51 розы Кения',
        slug: '',
        img: 'src/statics/flower.jpg',
        price: '2790руб'
    },
    6: {
        id: 6,
        title: 'Букет из 51 розы Кения',
        slug: '',
        img: 'src/statics/flower.jpg',
        price: '2790руб'
    },

}

function getAllCards() {
  return Object.values(cards);
}

export {getAllCards}