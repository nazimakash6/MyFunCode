const input = prompt('Enter roll no')

// create an object
    const students = {  
      One: 'Nazim',
      Two: 'Samina',
      Three: 'Jani'

    }

// using ternary operator
Object.hasOwn(students,input) ? console.log(students[input]) : console.log('Not Found')
