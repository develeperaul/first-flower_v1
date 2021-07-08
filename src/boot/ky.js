import ky from 'ky';

const apiFlower = ky.create({
    prefixUrl:
        'https://flowers.2apps.ru/api',
    timeout: 10000,
})

export { apiFlower }