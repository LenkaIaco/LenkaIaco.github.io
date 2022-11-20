let colors =  ["blue", "purple", "green", "yellow"]
let hasManyColors = colors.length > 3
let object = {
colors: ["blue", "purple", "green", "yellow"],
}
object.hasManyColors = colors.length > 3

console.log("my name is Lenka")

let add = (a,b) => {
   return a+b;
}
//NOTE: WHATS THE DIFFERENCE TO THE BELOW?(annotation attached)
let PrintAdd = (a,b) => {
    console.log(a+b); //console.log is a function in javascript and return is a keyword. console.log is used to 
    //debug/print to console. Return is a call to pass the value to a place where the call was made.  
    // When using the return statement, the function will stop executing, and return the specified value. 
    // console.log is not going to stop the execution.
}

let myVariable = false;
if (myVariable === true) {
    console.log('The condition has been evaluated true');
}

let a = 7;
if (a<5) {
    console.log(a/2);
} else {
    console.log(1);
}

let bookCount = 10;
// for-loop syntax: for (initialization; condition; afterthought) {statement}
let BookShelf = [1,2,3]
for (let i = BookShelf[0]; i<=BookShelf.length+1; i++) {
    if(i<=BookShelf.length) {
    console.log(i+". book moved to the next shelf");}
    else{console.log(`all ${BookShelf.length} books have been moved, the shelf is empty`)}
}

for (i=0;i<10;i++) {
    console.log(i) //loop which prints the numbers from 0-9.
}

for (i=1;i<=10;i++) {
    console.log(i) //loop which prints the numbers from 1-10.
}

for (i=0;i<=20;i+=2) {
    console.log(i) //V1: loop which prints even numbers from 0-20.
}

for (i=0;i<=20;i+=2) {
    if (i===0 || i%2 === 0) { //V2: loop which prints even numbers from 0-20.
    console.log(i)}
}


let printNumbersTill = (n) => {
    for (i=1;i<=n;i++) {
        console.log(i) //loop which prints the numbers from 0-9.
    }
}

let generateGreeting = (InsertName) => {
  return 'Greetings ' + InsertName + '!'
}

let printArray = (Array) => {
for (let i=0;i<Array.length;i++) {//is not <=ArrayLength, because arrays start with 0th position, so if e.g.
    //the array contained numbers 1-20, in array terms it would be positions 0 - 19
    console.log(Array[i])}
}

let array = [10,20,30,14,6]

array.forEach(element => { //forEach is designed to loop through arrays, so an element is one array position
    console.log(element)
});

let printArray2 = (Array) => {
    Array.forEach((element) => {
        console.log(element)
    })
}