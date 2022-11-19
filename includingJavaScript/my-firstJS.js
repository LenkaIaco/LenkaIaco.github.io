// Launching Dev Tools on any website: right - click, choose 'Inspect Element'. Google Chrome has best support 
//for Dev Tools so is preferred by Developers. Here, we focus on tab 'Console', for JS code
//jQuery (starting with symbol $) - library with pre-defined commands(functions) executors of JS:
// $(selector).action()  - where selector is any tag in html. This way you can change contents of HTML, or styling of CSS via javascript
$('div').text('hello world'); //change the HTML text of the div tags into hello world
$('div').css('background',' purple') //change the CSS background color property
$('h1').html('<strong>hello world!</strong>') //diference between .text and .html scripts is that the latter can contain html elements other than text, in this case <strong>
$('h1').append(' more text') //add new element into h1. Accepts HTML structure: .append('<p>A new paragraph.</p>')
$('h1').remove()//for removing an element (whole tag, or a specific child tag within)
$('button').click(() => {
            $('.first').toggleClass('hidden')}); //switch on/off classes' definitions. Alternatively written:
            // $('.button').on('click', () => {$('.first').toggleClass('hidden')}) 
            //, if css class is .hidden, it will switch to 'display' and vice versa. To be able to do this, we 
            //firstly created an entry in css,  class .hidden with property display: none (see end of CSS code). 
            //toggle means to switch between 2 states, like on and off or in this case, hidden and not hidden
            //referencing in brackets: ('.first') with dot, however ('hidden') without dot. You can assign a
            //HTML class 'first' to several elements, but there can be only one CSS class .hidden

let backgroundColor = $('h1').css('background-color') //load the css styling of h1 into variable

//USEFUL VS CODE SHORTCUTS (not only for JS, any doc type):(top-left gear symbol - command palette - type in 'keyboard' and select Help: Keyboar Shortcuts)
//Or directlink: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
console.log("JavaScript is working!") // to check whether our document is working, this command shows the comment in the Console part of the web browser

let colors = ["orange", "blue", "green", "purple"]
let objectPost = {
         title: "My post",
         description: "My first post, awesome",
         LikesCount: 12,
         comments: ["cool!","nice job!"]
     } 

console.log(colors);
console.log(objectPost);

// IF STRUCTURE: 'if () {}'  means if (something) then {execute content of curly braces}, e.g.:

let age=18;
if (age>=18) {
    console.log("you are an adult");
}
else {
    console.log("you're underage");
};
 // indent contents in [] for better visibility and faster overview of your code
 // you can also combine several if or if else structure within the initial if else structure

 
 // LOOP STRUCTURE:
 
 for (let i = 0; i < 10; i++) {
    console.log(i);
 }

 let posts = [
    {
        title: "First post",
        likeCount:12
    },
    {
        title: "Second post",
        likeCount: 222
    }
 ];

console.log(colors);

colors.forEach(color => {
    console.log(color); //color is basically a placeholder for some input
}); 
//forEach is a name for a loop function that we could write manually like this: 
//                          let myFunction = x => {
    //                      console.log(x);
 //                        }

//FUNCTIONS: assign a line of code that does something to a codeword(function name). 
// f(x) = x*x   -- where x is the input parameter and aftetr = you specify of how to use the input. 
//Equivalent of this function in JS (= corresponds in JS to =>):

let myFunction = x => x * x  //x is basically a placeholder for some input

let greeter = name => {
    console.log(`Hello, ${name}`) //you can also write it as ("hello, "+ name). If you use ` instead of ", you can utilise the $(variable); with traditional quotes "" this wont work
    if (name === "Lenka") {
        console.log("you are a JS-newbie");
    }
}

let name = ["Adam", "Peter", "Mate", "Reka"];//new array of names. LET: u are defining an element whose content u can reassign anytime. Using CONST instead, u can't reassign t content.


greeter(name); // woll return all array content at once
//as greeter is a function with name as a placeholder, it doesnt actually refer to array 'name', its just another way to say x. Whichever word you use, its a placeholder for any value
// you later indicate within the brackets:
greeter("Lenka"); 

//combinig the LOOP and FUNCTION and ARRAY examples from above:
name.forEach(arrayEntry => {
    greeter(arrayEntry);
});


//JQUERY LIBRARY:
//jQuery is JS's library quite easy to learn so suitable for beginners. JS has many libraries but others are more complicated. For studying purposes we therefore pick and use this one.









 console.log("this is the end of our code")
//  WEAKLY TYPED PROGRAMMING LANGUAGES:
// JavaScript is a weakly typed programming language which means it will convert types in order to successfully 
// perform an operation
// let result = 'apple' + 5;
// result equals to "apple5"
// let result2 = '122' - 1;
// result2 equals to 121
//Also, it is not possible to define a type for a variable, you can change its value anytime meanwhile in other
// languages, e.g. after defining myString as a string then you are not allowed to assign a number to it.

 // each time you refresh webpage, whole JS code is being re-run. Good practice to put a line indicating end of code, then you can see what
//  happened in between - if you made a mistake in code that caused the rest of the code not be executed, you wont see the final statement either. If however everything is working as 
//  designed and you are searching to e.g. have a statement displayed coded under a condition that is not valid anymore(e.g. the age variable changed to 12 in the meantime, so when 
//  the code is re-run, the statement "you are an adult" will disappear from the console, however the code is functional, only the inputs of the code changed - and results changed too.
//  workaround is in this case to include into the if-then structure also the else argument, so you see whether the value is true/false and working or it is not working at all)

//  /* the previous web-browser console log pastet in comments below, so we dont get an error in our current file for reference. As the browser's console produces results of the code at
//  the subsequent line after writing your line of code, this cannot be read by a .js file as a valid command and produce errors.*/
// 15 
// 15
// 15 + 5
// 20
// 15+5;
// 20
// //variable's value are being defined by command 'let' and then variable name and value:  
// //variable's value are being defined by command 'let' and then variable name and value: 
// //COMMENT IN JAVASCRIPT
// undefined
// /* MULTI-LINE COMMENT IN JAVASCRIPT*/
// undefined
// let age_of_Adam = 33// dont use spaces in variable names
// undefined
// age_of_Adam //calling my variable -chrome auto-fills in value into next line
// 33
// age_of_Adam/3
// 11
// /*suggestion popups during code-writing: hitting tab or mouse-clicking a suggestion you can fast-pick the variable names or commands etc.*/
// undefined
// age = 40 /*changing variable value is possible with equal sign, previous value will be discarded*/
// 40
// /*while = can be used both first defining and post-editing variable values, 'let' keyword returns an ERROR if youre trying to edit already existing variables with it. Its only for first-definition purposes*/
// undefined
// age = age_of_Adam //another way to override previous variab.value
// 33
// age = age_of_Adam + 14
// 47
// `end of line`; /*the ; sign isnt compulsory but advised for enhanced orientation in your file - to indicate the code is finished and the next line contains a new separate thought(line of code)*/
// 'hello world' //text insertion 1 
// 'hello world'
// "hello world" // text indication version 2. both have equal result 
// 'hello world'
// `hello world` /* another way to indicate text(v3) useful if within text you are working with quotation marks and you dont want the system to confuse them for commands */;
// 'hello world'
// /*"adam's age is "33""
// VM3178:1 Uncaught SyntaxError: Unexpected number*/
// `adam's age is "33"`
// `adam's age is "33"`
// `adam's age is ${age_of_Adam}`/* in text lines its possible to refer to variables using syntax ${variablename} */
// "adam's age is 33"
// //finding out length of a string:
// undefined
// "ho long is this".length
// 15
// //if variable's value is a text, .length can be used too:
// undefined
// let text = "this is my text"
// undefined
// text.length //return length of 'text' variable's containing text
// 15
// text.length / 3
// 5
// text.charAt(5) //return 5th character from the text string
// 'i'
// /* you can reclassify a text-containing variable into number by updating the value, however its not advised as of transparency of your code from top to bottom, overall orientation later on for yourself / people reading your code*/
// undefined
// text.endsWith("text") //does the variable's string end with word "text"?
// true
// let myFirstBoolean = true
// undefined
// myFirstBoolean = false
// false
// //boolean is a logical type containing two possibilities yes or no
// undefined
// text.endsWith("value")//I get a boolean result. endsWith is a boolean-type command
// false
// let a = 10
// let b = 5
// a && b /** LOGICAL OPERATORS: (e.g. AND OR ... used in math operations). && is the character for AND operator */
// /* list(=arrays): instead of defining variables for each line of text we can create an array-type variable and store all our lines of text there. its being defined with []brackets */
// ARRAYS are zero-based, i.e. first array value is numbered in JS as position 0(or index 0) instead of 1.
//let colors = [] //empty array. 
//let myArray = [3, 5, 6, 2, 22];
// myArray[1] is going to be 5 (2nd value stored in array)
// Count of the values:
// console.log(myArray.length); // prints 5
// colors = ["orange", "blue"] //updating array content
// (2) ['orange', 'blue']
// let different = [1, "text", true] /*can fill with different types of values*/
// undefined
// //in praxis u usually want same-type values within an array
// undefined
// /* ARRAY EXAMPLE: on webpage https://myfirstapp-syllabus.greenfox.academy/week02/git-github.md  you can have an array of titles, or arrays of bullet points; Other websites e.g. FB may contain array of posts, persons who liked a post or array of people in a group, array of comments etc. */
// undefined
// /* Array content is ussually meant to be updated - added new values into the list (imagine on examples above). Insert new values into existing array: use .push command: */
// undefined
// colors.push("yellow")//new element. Now re-check values in variable colors:
// 3
// colors
// (3) ['orange', 'blue', 'yellow']
// //yelow is added to pre-existing array values
// undefined
// colors.pop("orange") //remove specific elements from array
// 'yellow'
// colors
// (2) ['orange', 'blue']
// //array elements are numbered starting 0, so colors[0,1] is colors["orange", "blue"]
// undefined
// colors[1] //calling element 1 in the array actually returns second element "blue", as the array numbering is starting from 0:
// 'blue'
// colors[2] // array currently doesnt have 3rd value so JS returns 'undefined':
// undefined
// colors[2] = "purple" //defining 3rd element
// 'purple'
// colors[0] = colors[1] //we redefined 1st element, its same as 2nd now:
// 'blue'
// colors
// (3) ['blue', 'blue', 'purple']
// colors[0] = colors[1] + `ish`  // can adjust also text values using math operators
// 'blueish'
// colors
// (3) ['blueish', 'blue', 'purple']
// // quiz: what is result of this boolean calculation (&& is logical operator AND, || is OR):  false || (true && (false || false)):
// undefined
//BOOLEAN a data type that has value true or false. (other datatypes e.g. text, number). Booleans can be used 
//with LOGICAL OPERATORS: && and ('logical and'), || or ('logical or'), etc. 
// AND results true only if both values are true; as opposed to OR. See e.g. this equation with result 'false':
// false || (true && (false || false)) // more info on operators AND and OR:
// false
// //https://homepages.inf.ed.ac.uk/rbf/HIPR2/logic.htm
// undefined
// //https://homepages.inf.ed.ac.uk/rbf/HIPR2/or.htm
// undefined
// NOT is an unary Operator(just one value as input), it negates the input value: "!true" = false; !!true =true
// title = "My post"
// 'My post'
// description = "My first post, awesome"
// 'My first post, awesome'
// LikesCount =12
// 12
// comments = ["cool!","nice job!"]
// (2) ['cool!', 'nice job!']
// //CREATING an OBJECT: our object contains multiple variables/arrays, e.g. a post on FB contains the post, likes and comments:
// undefined
// objectPost = {
//     title: "My post",
//     description: "My first post, awesome",
//     LikesCount: 12,
//     comments: ["cool!","nice job!"]
//      }       //created an object containing the above variables. with {} and : and ,
// {title: 'My post', description: 'My first post, awesome', LikesCount: 12, comments: Array(2)}
// objectPost.title
// 'My post'
// //opposed to an array, an object's purpose is usually to store diff types of information in one place
// undefined
// objectPost.author = "FB user" //attach new elements to objects anytime
// objectPost.comments.push("another comment") //adding new values to existing variables of the object
// 3
// comments.push("adding short-reference comment")
// 3
// //adding values only with variable reference, if it is a part of an object, doesnt work(see above)
// undefined
// objectPost.comments
// (3) ['cool!', 'nice job!', 'another comment']
// objectPost.comments.push("adding comments the right way")
// 4
// comments //calling variable without object parent-reference works; however pushing new values without parent reference doesnt work
// (3) ['cool!', 'nice job!', 'adding short-reference comment']
// //the displayed values represent a variable 'comments' that exists outside the objectPost. the variable 'ObjectPost.comments' is seen by the computer as a separate variable
// undefined
// let firstComment = "FIRST comment!"
// undefined
// objectPost.comments.push(firstComment) //variables can be stored in objects
// 5
// //to increase likes count every time someone likes a post, store a calculation with +1 in the variable objectPost.LikesCount:
// undefined
// objectPost.LikesCount = objectPost.LikesCount + 1
// 13
// age //already defined variable
// 47
// age++ //increase variable value +1 each time the variable is used(called) again:
// 47
// age
// 48
// age
// 48
// //CORRECTION: increase value +1 only once, next time the variable is called
// undefined
// ++age //works the same
// 49
// //values we insert here in JavaScript are stored in the web browser's tab you have currently open. The browser's memory on your computer is the place where these values are being stored actually. If you refresh the page or go to another, the tab's content will be cleared and so will be this JavaScript, because in order to load a new page a browser's logic is to clean up space used before and use it for the new page.
// undefined
// //COMPARING VARIABLE VALUES:
// undefined
// let newVariable = 15 //defining new variable
// undefined
// newVariable === 3 //using 3x '=' to verify whether my variable contains the value 3. Opposite: !== NOT EQUALS
// false // EQUALS operator returns always a boolean result.
// //== is being used too, but === compares also if the variable type is same, so it's recommended
// undefined
// newVariable !== 10 //check if the value is NOT 10
// true
// "hello" === "hello1" //not only for variables but for any type of element. also text strings
// false
// //also for checking objects:
// undefined
// objectPost === objectPost
// true
// objectPost === {}  //if equal to an empty object
//false
//OTHER OPERATORS: Division '/' works like in math however lets you divide by 0:
// let resultD = 10 / 0
// resultD is Infinity
// operator Modulo '%' : like in math, get remainder value of a division:
// 5%3
// 2
