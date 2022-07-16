//Exercise 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]
//1. Declare an empty array;
let arr = []
console.log(arr) // Array []

//2. Declare an array with more than 5 number of elements
arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr) // Array(6) [ 1, 2, 3, 4, 5, 6, 7 ]

//3. Find the length of your array
let len = arr.length
console.log(len) // 7

//4. Get the first item, the middle item and the last item of the array
let firstItem = arr[0]
let midItem = arr[arr.length / 2 | 0]
let lastItem = arr[arr.length-1]
console.log("first ", firstItem )
console.log("middle ", midItem)
console.log("last", lastItem)

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    1,
    "Beverage",
    { country: 'Netherlands', city: 'Groningen' },
    { size:["tall", "grande", "venti"]},
    2.5,
    true
]
console.log(mixedDataTypes)
console.log(mixedDataTypes.length) // -> 6 // size is > 5

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
//7. Print the array using console.log()
console.log(itCompanies)
//8. Print the number of companies in the array
console.log(itCompanies.length)
//9. Print the first company, middle and last company
firstItem = itCompanies[0]
midItem = itCompanies[itCompanies.length / 2 | 0]
lastItem = itCompanies[itCompanies.length-1]
console.log("first : ", firstItem," | middle : ", midItem," | last : ", lastItem)
//10. Print out each company
let companies = itCompanies.join(', ')
console.log(companies)//console.log(itCompanies.toString())
//11. Change each company name to uppercase one by one and print them out
let textUppercase = itCompanies.map(company => company.toUpperCase())
console.log(textUppercase)
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let text = " are big IT companies."
let source = itCompanies
source.push( 'and ' +source.pop());
console.log(source.join(', '), text)// Facebook, Google, Microsoft, Apple, IBM, Oracle, and Amazon are big IT companies

//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let index = itCompanies.indexOf("Amazon")
index != -1
 ? console.log(itCompanies[index])
 : console.log("a company is not found")
//14. Filter out companies which have more than one 'o' without the filter method
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let bin = []

//Here is a short solution using a function expression (with ES6 arrow functions). The function accepts a string and the character to find as parameters. It splits the string into an array of characters and uses a reduce function to accumulate and return the matching indices as an array.
let b = []
const findIndices = (str, char) =>
  str.split('').reduce((indices, letter, index) => {
    letter === char && indices.push(index);
    return indices;
  }, [])
  
//eval multiple occurrence of letter-o in element, returns true/false to bin array
for (const x of itCompanies) { 
  b = findIndices(x, "o"); //  more than one 'o' without the filter method
  // → [1, 2, 9]
  b.length > 1
  ? bin.push(x)  
  : false
}
  console.log(bin.length)
  console.log(bin) //results

//15. Sort the array using sort() method
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let resultaten = itCompanies.sort()
console.log(resultaten)

//16. Reverse the array using reverse() method
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let reverso = itCompanies.reverse()
console.log(reverso)

//17. Slice out the first 3 companies from the array
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let sliced3 = itCompanies.slice(0, 3)
console.log(sliced3) // -> [ "Facebook", "Google", "Microsoft" ]

//18. Slice out the last 3 companies from the array
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
reverso = itCompanies.reverse()
sliced3 = reverso.slice(0, 3).reverse()
console.log(sliced3) // -> [ "IBM", "Oracle", "Amazon" ]

//19. Slice out the middle IT company or companies from the array
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
midIndex = itCompanies.length/2 | 0
let slice1 = itCompanies.slice(midIndex, midIndex +1)
console.log(slice1)

//20. Remove the first IT company from the array
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
itCompanies.shift()
console.log(itCompanies)

//21. Remove the middle IT company or companies from the array
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
midIndex = itCompanies.length/2 | 0
itCompanies.splice(midIndex, 1)
console.log(itCompanies) // removed "Apple"

//22. Remove the last IT company from the array
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
itCompanies.pop()
console.log(itCompanies) // removed "Amazon"

//23. Remove all IT companies
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let emptyArr = itCompanies.splice(itCompanies.length)
console.log("empty:", emptyArr)