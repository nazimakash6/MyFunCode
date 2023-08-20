const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
     let error = flase // if here error = true you will get error or false promise will be resolved
     if (!error) {
        resolve({username:'NazimAkash', password:'12345'})
     } else {
        reject(`Something went wrong`)
     }   
    }, 1000);
})

async function getUserData() {
    try{
        const response = await promise
        const data = response.username
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

getUserData()
