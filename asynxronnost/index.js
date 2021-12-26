console.log('Start');

window.setTimeout(function () {
    console.log('hello');
},3000)

console.log('end');

function Twosec() {
    console.log('to2sec');
}


window.setTimeout(Twosec,2000)


