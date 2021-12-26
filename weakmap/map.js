const obj = {
    name: 'Farhod',
    age: 24,
    job: 'Backend'
}
 
const  entries = [
    ['name', 'Farhod'],
    ['pge', '23'],
    ['job', 'Backend']
]

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

// console.log(entries.get('job'));
// const map = new Map(entries)
// console.log(map.get('job'));
// map
//     .set('newField', 32)
//     .set(obj, 'Value of object')
//     .set(NaN, 'Nan ??')

// console.log(map.get(NaN));
// console.log(map);

// map.delete('job')

// console.log(map.has('job'));
// console.log(map.size);
// map.clear()
// console.log(map.size);


//============

// for(let [key,value] of map) {
//     console.log(key,value);
// }

// for(let key of map.keys()) {
//     console.log(key);
// }


// map.forEach((key,value, m) => {
//     console.log(key,value);
// })



//=================



// const array = Array.from(map)

// const mapObj = Object.fromEntries(map.entries())

// console.log(mapObj);



const users = [
    {name: 'Farhod'},
    {anme: 'Oybek'},
    {name: 'Maxim'}
]



const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 4000 * 60))


    function lastVisit(user) {
        return visits.get(user)
    }

    console.log(lastVisit(users[1]));