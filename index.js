
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
