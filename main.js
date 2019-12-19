// console.log("Hello World from main.js")

//  Datatypes 
// var name1 = 'jithin'
// var age =10
// var marks = 10.5
// var isTrainer = true
// var x = null
// var y = undefined

// const NAME ='jithin'

// let fullName = 'jithin j kumar'

// const name ='stive'

// Difference between let, comst and Var,

// Strings

// const name= 'jithin'
// const language= 'python'

// console.log(`Hello ${name} todays class is about ${language.toUpperCase()}`)
// console.log(name.substring(1,4))

// newNumber = '20'
// newNumber1 ='25'
// bool = true
// console.log(Number(newNumber)+newNumber1+bool)
// console.log(Number(newNumber)+ bool)
// console.log(newNumber1 + bool)

// numbertoSting = 20
// console.log(`${String(numbertoSting)} is of ${typeof (String(numbertoSting))} type`)
// console.log(`${numbertoSting} is of ${typeof (numbertoSting)} type`)


// const fruits = ['banana', 'apple','mango']
// console.log(fruits);
// console.log(fruits.pop()) // removes mango
// console.log(fruits.shift()) //removes banana
// console.log(fruits.unshift('strawberry')) // adds strawberry at first and returns total length 2
// console.log(fruits.push('jackfruit')) // jackfruit is added last and returns total length 3
// console.log(fruits)

// fruits[1] = 'grapes' //replace apple with grapes
// console.log(fruits)

// fruits.splice(1,2,'blueberries') //deletes 2 fruit(grapes and jacfruit) and add blueberry in position 1 
// console.log(fruits)
// console.log(fruits.indexOf('strawberry'))

// //Objects {equavalent of dictionaries in javascript}

// const person = {
//     firstName :'jithin',
//     lastName : 'kumar',
//     age : 29,
//     fruits : fruits,
//     address : {
//         state : 'kerala',
//         city : 'kochi'
//     }
// }
// console.log(Object.values(person))

const Todos = [
    {
        id : 1,
        text : 'learn javascript',
        isComplete : false
    },
    {
        id: 2,
        text: 'complete Hackerrank 5 stars',
        isComplete: false
    },
    {
        id: 3,
        text: 'complete phase1 project',
        isComplete: true
    },
    {
        id: 4,
        text: 'complete html, css assignment',
        isComplete: true
    }
]

// console.log(Todos)
// console.log(Todos[2].text)

// //Looops

// console.warn("FOR loop");
// for (let index = 0; index < Todos.length; index++) {
//     console.log(Todos[index].text);    
// }

// console.warn("While Loop");
// let index = 0
// while (index<Todos.length) {
//     console.log(Todos[index].text)
//     index = index + 1
// }

// console.warn("For Of");
// for (let todo of Todos){
//     console.log(todo.text);    
// }


// console.warn("For Each");
// Todos.forEach(function(todo){
//     console.log(todo.text)
// })

// console.warn("Map");
// Todos.map(function(todo){
//     console.log(todo.text)
// })

// console.warn("Filter");
// Todos.filter(function(todo){
//     return todo.isComplete == true
// }).map(function(todo){
//     console.log(todo.text);
// })


// CONDITIONS

const x = 12
const y = '10'

// console.log(x == y)
// console.log(x === y)

// // If else it
// if(x==10){
//     console.log('x is 10');    
// }else if(x<10){
//     console.log('x is less than 10');
// }else{
//     console.log('x is greater than 10')
// }

// // Switch
// const color = 'red'
// switch(color){
//     case 'red':
//         console.log('STOP')
//         break    
//     case 'yellow':
//         console.log('Look')
//         break
//     case 'green':
//         console.log('Go')  
//         break
//     default:
//         console.log("Thank you")
//         break      
// }

// // Ternary Operator
// color == 'yellow' ? console.log('color is not red') : console.log('color is not yellow')

// functions
// function greet(name){
//     console.log(`Hello ${name}`)
//     return 
// }

// console.warn("Map");
// Todos.map(function (todo) {
//     console.log(todo.text)
// })



// const greet = (name, age) => `Hello ${name}, happy ${age} bday`;
// console.log(greet('jithin', 29));


// function sum(...theArgs) {
//     return theArgs.reduce((previous, current) => {
//         return previous + current;
//     });
// }

// const newSum = (...theArgs) => theArgs.reduce((previous, current) => (previous + current))

function addTwoNumbers(numOne, numTwo){
    return numOne + numTwo
}

function newSum(...theArgs){
    return theArgs.reduce(addTwoNumbers)
}

console.log(newSum(5,6,8, 20, 25))

// function Person(firstName, lastName, dob){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)  
// }

// const newPerson = new Person('jithin', 'kumar', 'December 17, 1995 03: 24: 00')
// console.log(newPerson)

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = dob
//     }
// }

// const newPerson = new Person('jithin', 'kumar', 'December 17, 1995 03: 24: 00')
// console.log(newPerson);

// document.getElementById('btn').style.backgroundColor = 'red'
// const para =  document.querySelectorAll('.temp')
// console.log(para);
// para.forEach(function(paraItem){
//     paraItem.innerHTML = "<p>Changed</p>"
// })

document.getElementById('btn').addEventListener('click', function(){
    const para = document.querySelectorAll('.temp')
    para.forEach(function (paraItem) {
        paraItem.innerHTML = "<p>Changed</p>"
    })
})

function changeTitle(){
    let title = 'Introduction to Javascript'
    if (document.querySelector('#title').innerText === title){
        console.log(document.querySelector('#title').innerText )
        document.querySelector('#title').innerText = "This is changed by clicking the button"
    }else{
        document.querySelector('#title').innerText = title
    }  
}

document.querySelector('#btn2').addEventListener('focus',changeTitle)


// on(function(){
//     console.log("clicked")
//     const para = document.querySelectorAll('.temp')
//     para.forEach(function (paraItem) {
//         paraItem.innerHTML = "<p>Changed</p>"
//     })
// })

// document.getElementsByClassName('temp')[0].innerText= "This is some dummy text"





