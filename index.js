let arr_cars = [
    {
        name: 'malibu',
        price: 30000
    },
    {
        name: 'matiz',
        price: 3000
    },
    {
        name: 'spark',
        price: 7500
    },
    {
        name: 'gentra',
        price: 140000
    },
    {
        name: 'santaferro',
        price: 80000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'tesla model y',
        price: 30000
    }
]


// найти самую дорогую машину в переменную макс
// найти самую дешевую  машину в переменную мин



let max = arr_cars.reduce((a, b) => {
    if(a.price > b.price) {
        return a
    } else {
        return b
    }
})

let min = arr_cars.reduce((a, b) => {
    if(a.price < b.price) {
        return a
    } else {
        return b
    }
})

console.log(max, min)