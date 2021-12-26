const requestURL = 'http://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {

     return new Promise ( (resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        
        xhr.responseType = 'json'
        xhr.setRequestHeader('content-Type', 'application/json')
        
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
            
        }
        
        xhr.onerror = () => {
            console.log(xhr.response);
        }
        
        
        xhr.send(JSON.stringify(body))
     })



}



const body = {
    name: 'Farhod',
    age: 22
}


// sendRequest('GET' , requestURL)
//     .then( data => console.log(data))
//     .catch( err => console.log(err))

sendRequest('POST' , requestURL, body)
    .then( data => console.log(data))
    .catch( err => console.log(err))