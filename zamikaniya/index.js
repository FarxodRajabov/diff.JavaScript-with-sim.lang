// function createCalcFunc(n) {
//     return function () {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalcFunc(42)
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
// const addOne = createIncrementor(14)
// console.log(addOne(42));

// function urlGenerator(domain) {
//     return function (url) {
//         return `http://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')

// console.log(comUrl('netflix'));



function bind(context, fn) {
    return function (args) {
        fn.apply(context, args)
    }
}


function logPerson(args) {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}, ${args}`);
}


const person1 = {name:'Mixail', age: '22', job:'Frontent',}
const person2 = {name:'Asia', age: '15', job:'SMM'}


bind(person1, logPerson)(['asdasd'])
bind(person2, logPerson)()

