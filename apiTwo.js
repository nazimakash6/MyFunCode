const fetcApi = fetch('https://jsonplaceholder.typicode.com/users') // getting api
.then( (response) => {
    return response.json() // convert into json format
})
.then( (data) => {
    console.log(data) 
})
.catch( (error) => console.log(error))
