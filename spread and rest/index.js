// const citiesRussia = ['Mascow', 'Piter', 'Kazan']
// const citiesEurope = ['Kanada', 'USA', 'Berlin']

// console.log([...citiesRussia, ...citiesEurope]);

// const citiesEuropepeople = {
//     Berlin: 22,
//     Kanada: 25
// }

// const citiesRussiapeople = {
//     Moscow: 12,
//     Piter: 45
// }

// console.log({...citiesEuropepeople, ...citiesRussiapeople});




// Practice 


// const numbers = [5,17,45,89,63]

// console.log(Math.max(...numbers));



// const divs = document.querySelectorAll('div')
// const nodes = [...divs]

// console.log(nodes, Array.isArray(nodes));
// console.log(divs, Array.isArray(divs));


// Rest 

// function sum(a,b, ...rest) {
//     return a + b + rest.reduce((a, i) => a + i, 0)
// }
// const numbers = [1,2,11,4,5,6,7,8,9]

// spread
// console.log(sum(...numbers));

// const a = numbers[0]
// const b = numbers[1]

// const [a, b, ...others] = numbers

// console.log(a,b,others);


const person = {
    name: 'Farhod',
    age: 22,
    city: 'Tashkent',
    hasFamily: true
}



const {name, age, ...others} = person


console.log(name,age, others)