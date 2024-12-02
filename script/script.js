//VARSS
var output = document.getElementById('output')

//FUNCTION 
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter number")
//     if(!isNaN(x)==true){
//         cartona = ` <h1> ${x} </h1> `
//         output.innerHTML = cartona
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }




//FUNCTION 
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter number")
//     if(!isNaN(x)==true){
//         if(x % 3 == 0 && x % 4 == 0){
//         cartona = ` <h1> YES IT CAN BE DIVIDED BY 3 and 4 </h1> `
//         output.innerHTML = cartona}
//         else{
//             cartona = ` <h1> NO IT CANNOT BE DIVIDED BY 3 and 4 </h1> `
//         output.innerHTML = cartona
//         }

//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }




//FUNCTION 
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter first number")
//     var y =window.prompt("enter second number")

//     if(!isNaN(x)==true && !isNaN(y)==true){
//         if(y > x ){
//         cartona = ` <h1> MAX IS ${y} </h1> `
//         output.innerHTML = cartona}
//         else{
//             cartona = ` <h1> MAX IS ${x} </h1> `
//         output.innerHTML = cartona
//         }
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }





//FUNCTION  
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter number")
//     if(!isNaN(x)==true){
//         if(x >= 0){
//             cartona = ` <h1> POSITIVE NUMBER </h1> `
//             output.innerHTML = cartona
//         }
//         else{
//             cartona = ` <h1> NEGATIVE NUMBER </h1> `
//             output.innerHTML = cartona
//         }
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }



//FUNCTION
// printEntered()
// function printEntered(){
//     var x = window.prompt("enter first number")
//     var y = window.prompt("enter second number")
//     var z = window.prompt("enter third number")
//     var cartona = ""
//     var max 
//     var min
//     if(x>=y && x >= z){
//         max = x
//     }
//     if(y>=x && y>=z){
//         max = y
//     }
//     if(z>=x && z>= y){
//         max = z
//     }
//     if(x<=y && x <= z){
//         min = x
//     }
//     if(y<=x && y<=z){
//         min = y
//     }
//     if(z<=x && z<= y){
//         min = z
//     }
//     cartona = ` <h1> MAX IS ${max} MIN IS ${min} </h1> `
//              output.innerHTML = cartona
// }



//FUNCTION
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter number")
//     if(!isNaN(x)==true){
//         if(x %2 == 0){
//         cartona = ` <h1> ${x} is even </h1> `
//         output.innerHTML = cartona
//     }else{
//         cartona = ` <h1> ${x} is odd </h1> `
//         output.innerHTML = cartona
//     }
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }



//FUNCTION
// printEntered()
// function printEntered(){
//     var cartona = " "
//     var testList = ["i" , "a" , "e" , "o","u"]
//     var result = 0;
//     var x = window.prompt("enter a character")
//      if(x.length==1){
//         if( x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){
//             cartona = ` <h1> ${x} is vowel </h1> `
//             output.innerHTML = cartona
//         }
//         else{
//             cartona = ` <h1> ${x} is NOT vowel </h1> `
//             output.innerHTML = cartona
//         }
//      }else{
//         alert("enter only one character")
//         printEntered()
//      }
// }



// //FUNCTION
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter number")
//     if(!isNaN(x)==true){
//        for(var i=1;i<=x;i++){
//          if(i==x){cartona += ` <h1>${i}</h1>`}
//          else{cartona += ` <h1>${i}</h1>  , `}
//        }
//        output.innerHTML = cartona
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }



//FUNCTION
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter number")
//     if(!isNaN(x)==true){
//        for(var i=1;i<=12;i++){
//         cartona += ` <h1> ${i*x} </h1>.`
//        }
//        output.innerHTML = cartona
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }



// //FUNCTION
// printEntered()
// function printEntered(){
//     cartona = ""
//     var x =window.prompt("enter number")
//     if(!isNaN(x)==true){
//        for(var i=0;i<=x;i++){
//         if(i % 2== 0){cartona += ` <h1> ${i} </h1>.`}
//        }
//        output.innerHTML = cartona
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }

//FUNCTION
// printEntered()
// function printEntered(){
//     var cartona = ""
//     var result = 1;
//     var x =window.prompt("enter first number")
//     var y =window.prompt("enter second number")
//     if(!isNaN(x)==true && !isNaN(y)==true){
//        for(var i=1;i<=y;i++){
//         result = result * x        
//        }
//        cartona = ` <h1> ${result} </h1> `
//        output.innerHTML = cartona
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }



//FUNCTION 
// printEntered()
// function printEntered(){
//     var cartona = ""
//     var one =window.prompt("enter first number")
//     var two =window.prompt("enter second number")
//     var three =window.prompt("enter third number")
//     var four =window.prompt("enter fourth number")
//     var five =window.prompt("enter fifth number")
//     one = parseFloat(one);
//     two = parseFloat(two);
//     three = parseFloat(three);
//     four = parseFloat(four);
//     five = parseFloat(five);
//     if(!isNaN(one)==true && !isNaN(two)==true && !isNaN(three)==true && !isNaN(four)==true && !isNaN(five)==true ){
//         var sum = one+two+three+four+five
//         var avg = parseInt(sum/5)
//         var perc = (sum / (5 * 100)) * 100; 
//                 cartona += ` <h1> SUM is ${sum} 
//                      <br>AVERAGE is ${avg}
//                      <br> PERECENTAGE is ${perc} %
//                      </h1> `
//                      output.innerHTML = cartona
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }


//FUNCTION
// printEntered()
// function printEntered(){
//     var cartona = ""
//     var month ={1: 31, // January
//     2: 28, // February
//     3: 31, // March
//     4: 30, // April
//     5: 31, // May
//     6: 30, // June
//     7: 31, // July
//     8: 31, // August
//     9: 30, // September
//     10: 31, // October
//     11: 30, // November
//     12: 31  // December
//     }
//     var x = window.prompt("enter the number of the month")
//     if(!isNaN(x)==true){
//         if (month[x] !== undefined) {
//             cartona = ` <h1> Days in Month: ${month[x]} </h1> `
//             output.innerHTML = cartona
//         } else {
//             cartona = ` Invalid month number</h1> `
//             output.innerHTML = cartona
//         }
//     }
//     else{
//         alert("enter a number")
//         printEntered(); 
//     }
// }


//FUNCTION
// printEntered()
// function printEntered(){
//     var cartona = ""
//     var grade
//     var one =window.prompt("enter first number")
//     var two =window.prompt("enter second number")
//     var three =window.prompt("enter third number")
//     var four =window.prompt("enter fourth number")
//     var five =window.prompt("enter fifth number")
//     one = parseFloat(one);
//     two = parseFloat(two);
//     three = parseFloat(three);
//     four = parseFloat(four);
//     five = parseFloat(five);
//     if(!isNaN(one)==true && !isNaN(two)==true && !isNaN(three)==true && !isNaN(four)==true && !isNaN(five)==true ){
//         var sum = one+two+three+four+five
//         var avg = parseInt(sum/5)
//         var perc = (sum / (5 * 100)) * 100; 
//         if(perc >= 0 && perc <=100){
//             if(perc < 40){grade="F"}
//         if(perc < 60 && perc >= 40){grade="E"}
//         if(perc >= 60 && perc < 70 ){grade="D"}
//         if(perc >= 70 && perc < 80){grade="C"}
//         if(perc >= 80 && perc < 90){grade="B"}
//         if(perc >= 90 && perc <=100){grade="A"}
//         cartona += ` <h1> SUM is ${sum} 
//         <br>AVERAGE is ${avg}
//         <br> PERECENTAGE is ${perc} %
//         <br> Grade is ${grade}.
//         </h1> `
//         output.innerHTML = cartona
//         }else{
//             alert("wrong given marks")
//             printEntered();
//         }      
//     }
//     else{
//         alert("enter a number")
//         printEntered();
//     }
// }



//FUNCTION
// daysInMonth();
// function daysInMonth() {
//     var month = parseInt(prompt("Enter the month number (1-12):"), 10);
//     var cartona
//     var days;
//     switch (month) {
//         case 1: 
//         case 3:
//         case 5:
//         case 7: 
//         case 8: 
//         case 10: 
//         case 12:
//             days = 31;
//             break;
//         case 4: 
//         case 6: 
//         case 9: 
//         case 11: 
//             days = 30;
//             break;
//         case 2: 
//             days = "28";
//             break;
//         default:
//             days = "Invalid month number";
//     }
//     cartona=`<h1> ${days} days </h1>`
//             output.innerHTML = cartona
// }


//FUNCTION
// printEntered()
// function printEntered() {
//     var letter = prompt("Enter a character").toLowerCase();
//     var cartona
//     if (letter.length === 1 && /^[a-z]$/.test(letter)) {
//         switch (letter) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 cartona=` <h1> ${letter} is a VOWEL </h1>`
//                 output.innerHTML = cartona
//                 break;
//             default:
//                 cartona=` <h1> ${letter} is NOT A VOWEL </h1>`
//                 output.innerHTML = cartona
//                 break;
//         }
//     } else {
//         alert("Please enter a valid alphabet.");
//         printEntered()
//     }
// }


//FUNCTION
// printEntered()
// function printEntered(){
//     var x = window.prompt("first num") 
//     var y =  window.prompt("second num")
//     var cartona = ""
//     switch (true){
//         case x > y: cartona = `<h1>MAX is ${x} </h1>`
//                     output.innerHTML = cartona
//                     break;
//         case x < y: cartona = `<h1>MAX is ${y} </h1>`
//                     output.innerHTML = cartona
//                     break;
//         default:    cartona = `<h1>BOTH EQUAL </h1>`
//                     output.innerHTML = cartona
//                     break;
//     }
// }



// //FUNCTION
// printEntered()
// function printEntered(){
//     var x = window.prompt("num") 
//     var cartona = ""
//     if(!isNaN(x)==true){
//     switch (true){
//         case x % 2 ==0: cartona = `<h1> ${x} is even </h1>`
//                     output.innerHTML = cartona
//                     break;
//         default:    cartona = `<h1>${x} is odd </h1>`
//                     output.innerHTML = cartona
//                     break;
//     }}
//     else{
//         alert("enter a number")
//              printEntered();
//     }
// }



//FUNCTION
// printEntered()
// function printEntered(){
//     var x = window.prompt("num") 
//     var cartona = ""
//     if(!isNaN(x)==true){
//     switch (true){
//         case x >= 0: cartona = `<h1> ${x} is positive </h1>`
//                     output.innerHTML = cartona
//                     break;
//         default:    cartona = `<h1>${x} is negative </h1>`
//                     output.innerHTML = cartona
//                     break;
//     }}
//     else{
//         alert("enter a number")
//              printEntered();
//     }
// }


//FUNCTION
// printEntered()
// function printEntered(){
//     var cartona
//     var op =  window.prompt("enter operation (+ / - / % / *)")
//     op = String(op)
//     var x = window.prompt("first num")
//     var y = window.prompt("second num")
     
//     if(!isNaN(x)==true && !isNaN(y)==true){
//     switch (op){
//         case "+": cartona = `<h1> ${(parseInt(x)+parseInt(y))} </h1>` 
//                    output.innerHTML = cartona
//                   break
//         case "-": cartona = `<h1> ${(parseInt(x)-parseInt(y))} </h1>`
//                      output.innerHTML = cartona
//                    break;
//         case "%": cartona = `<h1> ${(parseInt(x)/parseInt(y))} </h1>` 
//                   output.innerHTML = cartona
//                    break;
//         case "*": cartona = `<h1> ${(parseInt(x)*parseInt(y))} </h1>` 
//                  output.innerHTML = cartona
//                   break;
//         default: cartona = `<h1> INVALID OPERATOR </h1>` 
//                  output.innerHTML = cartona
//                  break;
//     }}
//     else{
//                 alert("enter a number")
//                 printEntered();
//             }
// }
