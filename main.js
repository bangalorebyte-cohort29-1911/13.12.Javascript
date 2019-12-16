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

console.log(Todos)
console.log(Todos[2].text)

//Looops

console.warn("FOR loop");
for (let index = 0; index < Todos.length; index++) {
    console.log(Todos[index].text);    
}

console.warn("While Loop");
let index = 0
while (index<Todos.length) {
    console.log(Todos[index].text)
    index = index + 1
}

console.warn("For Of");
for (let todo of Todos){
    console.log(todo.text);    
}


console.warn("For Each");
Todos.forEach(function(todo){
    console.log(todo.text)
})

console.warn("Map");
Todos.map(function(todo){
    console.log(todo.text)
})

console.warn("Filter");
Todos.filter(function(todo){
    return todo.isComplete == true
}).map(function(todo){
    console.log(todo.text);
})


// CONDITIONS


