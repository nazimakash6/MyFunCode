     // prompt box
    const input = prompt('Enter your name') 
    // create array
    const arr = ['Nazim','akash','Ijaz','Zain','nazim']
    // conver input to lowercase
    const lowerInput = input.toLowerCase()
    // find the value using filter method
   const find = arr.filter(item => item.toLocaleLowerCase() == lowerInput)
   // print the value using forEach method
   const result = find.forEach(item => console.log(item))
