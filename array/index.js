const people = [
    {name:'Mixail', age: 22, job:'Frontent', budjet: 2000},
    {name:'Asia', age: 15, job:'SMM', budjet: 6000},
    {name:'Maxim', age: 23, job:'Frontent', budjet: 4000},
    {name:'Alisa', age: 15, job:'SMM', budjet: 9000},
    {name:'Margn', age: 5, job:'SMM', budjet: 9000},
    {name:'Ali', age: 65, job:'SMM', budjet: 9000},
]

//For

// for ( person of people) {
//     console.log(person);
// }

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }



// ForEach

// people.forEach(function(person,index,pArr) {
//     console.log(person);
//     console.log(index);
//     console.log(pArr);
// })

// people.forEach(person => console.log(person))

// Map
// const newPeople = people.map(person => `${person.name} ${person.age}`)
// console.log(newPeople);

// Filter
// const adults = []
// for ( let i = 1; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }

// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })

// const adults = people.filter(person => person.age >= 18)
// console.log(adults);

// Reduce

// let sum = 0
// for (let i = 0 ; i < people.length; i++) {
//     sum += people[i].budjet
// }

// const amount = people.reduce((total, person) => total + person.budjet, 0)
// console.log(amount)

// Find 

// const maxim = people.find(person => person.name === 'Maxim')
// console.log(maxim);


// FindIndex

// const maximIndex = people.findIndex(person => person.name === 'Maxim')
// console.log(maximIndex);


const filtr = people.filter(person => person.budjet >= 4000 )


console.log(filtr);