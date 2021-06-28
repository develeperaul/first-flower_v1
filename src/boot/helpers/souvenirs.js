const candies = {
    1: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    2: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    3: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    4: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    5: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    }
}

const postcard = {
        1: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    2: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    3: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    4: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    5: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    }
}
const toys = {
        1: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    2: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    3: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    4: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    },
    5: {
        title: 'Конфеты “Raffaello”',
        price: '790',
        img: ''
    }
}

function getAllcandies() {
  return Object.values(candies);
}

function getAllpostcard() {
  return Object.values(postcard);
}

function getAlltoys() {
  return Object.values(toys);   
}

export {getAllcandies, getAllpostcard, getAlltoys}