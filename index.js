// let numbersBtn=document.querySelectorAll(".num");
// let leftBracketBtn=document.querySelector(".LeftBracket");
// let rightBracketBtn=document.querySelector(".RightBracket");
// let modulusBtn =document.querySelector(".modulus");
// let clearAllBtn=document.querySelector(".CE");
// let divisionBtn=document.querySelector(".divide");
// let multiplicationBtn=document.querySelector(".multiply");
// let minusBtn=document.querySelector(".minus");
// let plusBtn=document.querySelector(".add");
// let answerBtn=document.querySelector(".answer");
// let decimalBtn=document.querySelector(".decimal");
// let outputs=document.querySelector(".output")
// let boxes=document.querySelectorAll(".box");

// //  numbersBtn(key,num){
// //     key[0]=0;
// //  };

// let plus;

// let input=[];


// function initCalc(){
    
//     outputs.innerHTML="";
//     input=[];
// };
// initCalc();


// //ALL BUTTONS

// leftBracketBtn.addEventListener('click',function(){
//     outputs.innerHTML="(";
//     // outputs.push.innerHTML="(";
//     input.push='(';
// });

// rightBracketBtn.addEventListener('click',function(){
//     outputs.innerHTML=")";
//     input.push=')';
// });

// modulusBtn.addEventListener('click',function(){
//     outputs.innerHTML="%";
//     input.push='%';
// });

// clearAllBtn.addEventListener('click',initCalc);

// divisionBtn.addEventListener('click',function(){
//     outputs.innerHTML="/";
// });

// multiplicationBtn.addEventListener('click',function(){
//     outputs.innerHTML="*";
// });

// minusBtn.addEventListener('click',function(){
//     outputs.innerHTML="-";
// });

// plusBtn.addEventListener('click',function(){
//     outputs.innerHTML="+";
// });

// answerBtn.addEventListener('click',function(){
//     //yaha calculator claculate karega 
//     operation();
// });

// decimalBtn.addEventListener('click',function(){
//     // outputs.innerHTML=".";
//     onclick="display.value='.";
// });


// numbersBtn.forEach((key,num)=>{
//     numbersBtn[key].innerHTML=`${numbersBtn[num]}`;
// })


let string="";
let buttons=document.querySelectorAll(".box");

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('.output').value=string;
        }
        else if(e.target.innerHTML=='CE'){
            string="";
            document.querySelector('.output').value=string;
        }
        else{
            console.log(e.target);
            string =string + e.target.innerHTML;
            document.querySelector('.output').value=string;
        }
        
    })
})