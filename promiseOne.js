const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
     let error = false
     if (!error) {
        resolve({username:'NazimAkash', password:'12345'})
     } else {
        reject(`Something went wrong`)
     }   
    }, 1000);
})
promise
.then( (response) => response)
.then( (data) => console.log(data.username))
.catch( (error) => console.log(error))
