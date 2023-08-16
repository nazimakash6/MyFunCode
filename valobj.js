const input = prompt('Enter roll no or name')

    const obj = {
      One: 'Nazim',
      two: 'samina',
      ThRee: 'JAni'

    }

    const lowerInput = input.toLowerCase()
   function lowerObj(obj) {

      const lowerCaseObj = {}

      const keys = Object.keys(obj)
      keys.forEach((key) => {
       return lowerCaseObj[key.toLowerCase()] = obj[key]
      })
      return lowerCaseObj;
    }
    const results = lowerObj(obj)

    Object.hasOwn(results,lowerInput) ? console.log(results[lowerInput]) : console.log('Not Found')
