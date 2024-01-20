//ex 6.1
function Add(num1,num2){
    return num1+num2;
}
console.log("sum is : "+Add(5,8));
console.log("sum is : "+Add(45,67));

//ex 6.2
let array=['beautiful', 'amazing','lovely','beautiful as moon'];
function Select(){
    name=prompt("enter your name ");
    value=Math.floor(Math.random()*array.length);
    newValue=array[value];
    console.log('your name is'+name+ 'and its meaning is'+ newValue);

// }
// console.log(Select());

// ex 6.3
let num1=+prompt("enter a first number");
let num2=+prompt("enter a second number");
let operation=prompt("what you want to do add or subtract");
function calculator(){
    if (operation=='add'){
        console.log( num1+num2);
    }else if (operation=='subtract'){
        console.log(num1-num2);
    }else{
        console.log ('invalid choice');
    }
}
calculator(num1,num2);

//ex 6.4
let emtyArray=[];
for (i=0; i<=10; i++){
    a=(i*5);
    b=(i*i);
    c=add(a,b);
    emtyArray.push(c);
}
function add(num1,num2){
    return num1+num2;
}
console.log(emtyArray);

//ex 6.5
let value='1000';
(function (){
    value='1001';
})();
console.log((value));
let result=(function (){
    let value='1002';
    return value;
})();
console.log((result));
let newFunction=function(parameter){
    value=parameter;
    console.log('new value is ', value);
}
newFunction('idk I only coded that');


// ex 6.6
let a=+prompt('enter value you want to know the factorial of?');
function recursion(a){

    if (a==0){
        return 1;
    }else{
        return a*recursion(a-1);

}
}
console.log('The factorial of ' + a + ' '+'is' + ' ' + recursion(a));


// ex 6.7
let start=10
for(i=start; i>=0; i--){

}
function recursion(start){
    for(i=start; i>=0; i--){
        console.log(i);

    }
    if (start<1){
        return;
    }else if (start>=1){
        recursion(start-1);
        start--;
    }

}
console.log(recursion());


//ex 6.8
let myFunction=function (input){
    return input;
}
console.log(myFunction("Hello"));
function myFunction2(input){
    return input;
}
console.log(myFunction2('khadijah'));


// chapter projects 
//recursive function
function f(count){
    if (count>10){
        return;
    }
    f(count+1);
}
f(5);
f(8);
f(11);




//Set timeout order
const  f1= ()=> console.log("one");
const  f2=()=> f1(); console.log("Two");
const  f3=()=> console.log("three"); f2();
const  f4=()=> console.log("four"); f3();
f4();
setTimeout(f1(),1);




























