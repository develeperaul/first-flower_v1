import { apiFlower } from "src/boot/ky";

export function getSectionsList(){
    return apiFlower('section_list.php').json();
}

export function getSubSection(id){
    return apiFlower(`section_list.php?id=${id}`).json();
}

export function getElementList(id){
    return apiFlower(`elements_list.php?id=${id}`).json();
}



const cards = [
    {   
        id: 1,
        categories: 'розы',
        title: 'роза красная 30 см',
        price: '60',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 2,
        categories: 'розы',
        title: 'роза красная 40 см',
        price: '70',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 3,
        categories: 'розы',
        title: 'роза красная 50 см',
        price: '80',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 4,
        categories: 'розы',
        title: 'роза красная 60 см',
        price: '90',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 5,
        categories: 'розы',
        title: 'роза красная 70 см',
        price: '100',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 6,
        categories: 'розы',
        title: 'роза красная 100 см',
        price: '150',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 7,
        categories: 'розы',
        title: 'роза красная 120 см',
        price: '200',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },

    {
        id: 8,
        categories: 'хризантемы',
        title: 'хризантема красная 30 см',
        price: '60',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 9,
        categories: 'хризантемы',
        title: 'хризантема красная 40 см',
        price: '70',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 10,
        categories: 'хризантемы',
        title: 'хризантема красная 50 см',
        price: '80',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 11,
        categories: 'хризантемы',
        title: 'хризантема красная 60 см',
        price: '90',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 12,
        categories: 'хризантемы',
        title: 'хризантема красная 70 см',
        price: '100',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 13,
        categories: 'хризантемы',
        title: 'хризантема красная 100 см',
        price: '150',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    {
        id: 14,
        categories: 'хризантемы',
        title: 'хризантема красная 120 см',
        price: '200',
        description: 'Красная эквадорская роза Красная эквадорская роза',
        logo: '/flower.jpg'
    },
    
]



const categories = [
    {
        id: 1,
        name: 'категории',
        parent: null
        
    },
    {
        id: 2,
        name: "Цветы",
        parent: 1
    },
        {
        id: 3,
        name: "Букеты",
        parent: 1
    },
        {
        id: 4,
        name: "садебная флористика",
        parent: 1
    },
        {
        id: 5,
        name: "композиции",
        parent: 1
    },
        {
        id: 6,
        name: "цветы в коробке",
        parent: 1
    },
        {
        id: 7,
        name: "шары",
        parent: 1
    },
        {
        id: 8,
        name: "подарки",
        parent: 1
    },
        {
        id: 9,
        name: "розы",
        parent: 2
    },
        {
        id: 10,
        name: "хризантемы",
        parent: 2
    },
        {
        id: 11,
        name: "альстрометрии",
        parent: 2
    },
        {
        id: 12,
        name: "эустомы",
        parent: 2
    },
        {
        id: 13,
        name: "лилии",
        parent: 2
    },
        {
        id: 14,
        name: "герберы",
        parent: 2
    },
        {
        id: 15,
        name: "тюльпаны",
        parent: 2
    },
        {
        id: 16,
        name: "экзотика",
        parent: 2
    },
        
]

function struct(list, parent=null){
    const items = {};
  

    list.map(item => {
        if(item.parent === parent){
            items[item.id] = {
                ...item, 
                children: struct(list, item.id)
            };
        }
    });
 
    return items
}

const sort = name =>{
    
    return cards.filter(item => item.categories === name)
}

const findCard = id => {
    console.log( cards.find(item => item.id == id))
    return cards.find(item => item.id == id)
}
/*

    товары

{
    categories: "Цветы",
    {
        categories: "Розы",
        {
            title: "Роза красная"
        }
    },
    {
        categories: "Хризантемы",
        {
            title: "Хризантема красивая"
        }
    }
}


категории
цветы
буккеты
свадебная флористика
композиции
цветы в коробке
шары
подарки

цветы
розы 
хризантемы
альстрометрии
эустомы
лилии
гереберы
тюльпаны
экзотика

*/

function getAllCards() {
//   return Object.values(cards);
 return cards
}

function getCategories(){
       
    return struct(categories)
}
export {getAllCards, getCategories, sort, findCard}