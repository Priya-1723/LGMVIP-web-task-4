const inputScreen = document.querySelector("#input-screen");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");

let string = "";
let btnArr = Array.from(buttons);
btnArr.forEach( (button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputScreen.value = string;
        } else if(e.target.innerHTML == 'C'){
            string = "";
            inputScreen.value = string;
        } else if(e.target.innerHTML == 'CE'){
            string = string.substring(0, string.length-1);
            inputScreen.value = string;
        }
        else {
            string += e.target.innerHTML;
            inputScreen.value = string;
        }
        
    })
})
