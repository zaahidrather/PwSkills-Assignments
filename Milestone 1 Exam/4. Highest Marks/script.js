let marks = [11,8,10,15,18];
let  highestMarks = marks[0]; 

for(i = 1; i < 5; i++){
    highestMarks = highestMarks > marks[i]?highestMarks:marks[i]; 
}
console.log("Highest Marks: " +highestMarks);

// Solution using forEach()
// let arr = [4, 5, 6, 7, 8, 9, 19,10];
// temp = 0;

// arr.forEach((element) => {
//   if (temp < element) {
//     temp = element;
//   }
// });
// console.log("Highest Marks:" +temp); 