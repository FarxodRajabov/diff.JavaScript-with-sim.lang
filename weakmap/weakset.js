const users = [
    {name: 'Farhod'},
    {anme: 'Oybek'},
    {name: 'Maxim'}
]

const visit = new WeakSet()

visit.add(users[0]).add(users[1])

users.splice(1 , 1)

console.log(visit.has(users[0]));
console.log(visit.has(users[1]));