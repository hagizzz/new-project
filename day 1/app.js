// for(let i= 0; i < 10; i++) {
//     console.log(i)
// }

// Input:
//   arr: array of integers
//   m: a fixed integer
// Output:
//   print sum of odd element less than m, and sum of even element less than m

// let arr = [1, 2, 3, 5, 6, 7, 101]
// let m = 12
// let sum_odd = 0
// let sum_even = 0

// for ( let i = 0; i < arr.length; i++) {
//     if(arr[i] < m && arr[i] % 2 == 1)  
//         sum_odd = sum_odd + arr[i]
//     if(arr[i] < m && arr[i] % 2 == 0)
//         sum_even = sum_even + arr[i]
// }
    
// console.log(sum_odd)
// console.log(sum_even)

// let users = [
//     {name: "A", age : 22}
// ]
// function insertUser(name, age) {
//     let user = {
//         name: name,
//         age: age,
//     }
//     users.push(user)
// }

// insertUser("Giang", 21)
// insertUser("Khoa", 21)
// insertUser("Binh", 20)

// console.log(users[Math.floor(Math.random()*users.length)])

// Simple Loterry app (Extended)
// Input:
//   users: array of users (input from file)
// Output:
//   pick a random winning user in users

// Homework: Enhance the program with the following features
//   1. only pick user has age greater than 17 (using .filter())
//   2. generate id for each user when inserting (brainstorm your own idea)

// const fs = require('fs')
// let user = []
// function getUserFromFile(filename) {
//     const fileCallback = function(err, data) {
//         const lines = data.split('\n') 
//         for(let i = 0; i < lines.length; i++) {
//             let line = lines[i].split(' ')
//             let name = line[0]
//             let age = line[1]
//             insertUser(name, age)
//         }
//         console.log(line)
//     }

//     fs.readFile(filename, 'utf-8', fileCallback)
// }

// const prompt = require('prompt-sync')()
// const axios = require('axios')

// function fetchQuestions(nQuestion, callback) {
//     axios.get(`https://opentdb.com/api.php?amount=${nQuestion}`).then((res) => {
//         callback(res.data.results)
//     })
// }

// fetchQuestions(10, (questions) => {
//     let count = 0
//     for (let i = 0; i < questions.length; i++) {
//         console.log(questions[i].question)
//         let arr = [questions[i].correct_answer, ...questions[i].incorrect_answers]
//         shuffle(arr)
//         let key = ''
        
//         for (let j = 0; j < arr.length; j++) {
//             console.log(String.fromCharCode(65 + j) + '. ' + arr[j] )
//             if(arr[j] == questions[i].correct_answer) {
//                 key = String.fromCharCode(65 + j)
//             }
//         }
//         const userInput = prompt('Your answer is: ')
//         for (let j = 0; j < arr.length; j++) {
//             if (userInput == key) {
//                 console.log('Your answer is correct')
//                 count = count + 1
//                 break
//             }
//             else {
//                 console.log(`Sorry but the correct answer is ${questions[i].correct_answer}`)
//                 break
//             }
//         }
//     }
//     console.log(`You have ${count} correct answers`)
// })

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

const numbers = [2, 3, 5, 8, 9, 0]

const result = numbers.filter(number => {
    return number < 5
})

console.log(result)

const result2 = numbers.find(number => {
    return number % 2 === 0
})