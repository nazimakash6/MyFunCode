const fetcApi = fetch('https://jsonplaceholder.typicode.com/users') // getting api

async function consumApi() {
    try{
        const data = await fetcApi
        const response = await data.json() // convert into json
        console.log(response)
    }catch(error){
        console.log(error)  // error handling
    }
}

consumApi() // call the function
