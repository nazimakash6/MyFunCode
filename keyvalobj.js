const input = prompt('Enter roll no or name') //prompt box

    const students = {
      One: 'Nazim',
      Two: 'Samina',
      Three: 'Jani'

    }

    const lowerInput = input.toLowerCase() // convert input to lowercase
    const entries = Object.entries(students)    // get all entries in object return in an array of array
    const lower = entries.filter(([key, val]) => {   // find target entry and convert all intries into lowercase
      return key.toLowerCase() === lowerInput || val.toLowerCase() === lowerInput
    })



    //using ternory operator
    lower.length == 0 ? console.log('Not Found') : lower.forEach(([key,val]) => console.log(`${key} :${val}`))
