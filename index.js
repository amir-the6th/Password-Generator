const charactersWithSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

console.log(charactersNoSymbols);

let passElOne = document.getElementById("pass-box1");
let passElTwo = document.getElementById("pass-box2");
let password1 = "", password2 = "";
let sliderEl = document.getElementById("myRange");
let checkboxEL = document.getElementById("symbolsCheckbox");
let passLengthEl = document.getElementById("pass-length");
let passLength = 0;
let generateButtonEl = document.getElementById("generate-btn");
let copyBtn1 = document.getElementById("copy-btn-1");


function randomCharIndex(symboldIncluded) {
    if(symboldIncluded) return Math.floor(Math.random() * 91);
    else return Math.floor(Math.random() * 62);
}

function generatePass() {
    if(checkboxEL.checked) {
        for(let i = 0; i < passLength; i++) {
            password1 += charactersWithSymbols[randomCharIndex(true)];
            password2 += charactersWithSymbols[randomCharIndex(true)];
        }
    } else {
        for(let i = 0; i < passLength; i++) {
            password1 += charactersNoSymbols[randomCharIndex(false)];
            password2 += charactersNoSymbols[randomCharIndex(false)];
        }
    }
    passElOne.value = password1;
    passElTwo.value = password2;
    password1 = "";
    password2 = "";
}

function copyOnClick(num) {
    let passContent = "";
    let copyBtn;
    if(num === 1) {
        passContent = passElOne.value;
        copyBtn = document.getElementById(id="copy-btn-1");
    } else if (num === 2) {
        passContent = passElTwo.value;
        copyBtn = document.getElementById(id="copy-btn-2"); 
    } else {
        console.log("Could not retrieve the password from the clipboard.")
    }

    navigator.clipboard.writeText(passContent).then(function() {
    console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
    console.error('Async: Could not copy text: ', err);
    });


    copyBtn.innerHTML = "Copied!";
    setTimeout(() => copyBtn.innerHTML = "Copy <i class='fa fa-copy'></i>", 2000);
}

sliderEl.oninput = function() {
    passLengthEl.textContent = this.value;
    passLength = sliderEl.value;
}

// checkboxEL.onchange = function() {
//     console.log(checkboxEL.checked);
// }