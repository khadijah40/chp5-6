// // ex 5.1
// let maxValue=5;
// let solution=Math.floor(Math.random()*maxValue + 1);
// answer=false;
// while (!answer) {
//     let userInput = prompt("Guess a number between 1 and " + maxValue);

//     if (userInput == solution) {
//         answer = true;
//         alert("Congratulations! You guessed the correct number!");
//     } else if (userInput > maxValue || isNaN(userInput)) {
//         alert("Invalid input");
//     } else {
//         if (userInput < solution) {
//             alert("Too low! Try again.");
//         } else {
//             alert("Too high! Try again.");
//         }
//     }
// }


// //ex 5.2
// let counter=0;
// let set=5;
// do{
//     consnsole.log(counter);
//     counter+=set;
// }while(counter<100);


// //ex 5.3
// let myWork=[];
// for (i=0; i<=10; i++){
//     let status= i%2==0 ? true : false; 
//     let lesson={
//         lesson: 'lesson'+ i,
//         status: status
//     }
//     myWork.push(lesson);
// }
// console.log(array);

// //ex5.4
// let myTable=[];
// let rows=3;
// let columns=4;
// let counter=0;
// for (i=0; i<rows; i++){
//     let tempArray=[];
//     for (j=0; j<columns; j++) {
//         tempArray.push(counter++);
//         }
//         myTable.push(tempArray);
// }
// console.log(myTable);

  
// // ex 5.5
// let gridArray=[];
// let cells=64;
// let counter=0;
// var row=[];
// for (i=0; i<cells; i++){
//     if (counter%8==0){

//         if (row!=undefined){
//             gridArray.push(row);
//         }
//     }
// }
// counter++;
// let temp=row.push(counter);
// row.push(temp);
// if (temp==8){
//     gridArray.push(row)

// }
// console.log(gridArray);

// // ex5.6
// let array=[];
// for (i=0; i<=10; i++){
//     array.push(i);
// }
// console.log(array);
// for (i=0; i<array.length; i++){
//     console.log(i);
// }
// for(let a of array){
//     console.log(a);
// }

// //ex5.7
// let obj={ name:'khadijah',
//           gender:'female',
//           age: 19
// }
// for (let o in obj){
//     console.log(obj[o]);
// }
// let array=[];
// for (let o in  obj){
//     array.push(o);
// }
// console.log(array);


// //ex 5.8
// let output='';
// let skip=5;
// for (i=0; i<=10; i++){
//     if (i==skip){
//         continue;
//     }
//     output+=i;
// }
// console.log("Output:", output);
// // //now using break 
// let output2='';
// let skip2=5;
// for (i=0; i<=10; i++){
//     if (i==skip2){
//         break;
//     }
//     output2+=i;
// }
// console.log("Output:", output2);


// //Math Multiplication table
// let blankArray=[];
// let value=4;
// for (i=1; i<=value; i++){
//     tempArray=[];
//     for (j=1; j<=value; j++)
//     tempArray.push(i*j);
// blankArray.push(tempArray);
// }
// console.log(blankArray);






