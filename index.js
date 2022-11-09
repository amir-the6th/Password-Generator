const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passElOne = document.getElementById("pass-box1");
let passElTwo = document.getElementById("pass-box2");
let password1 = "", password2 = "";
let sliderEl = document.getElementById("myRange");
let passLengthEl = document.getElementById("pass-length");
let passLength = 0;


function randomCharIndex() {
    return Math.floor(Math.random() * 91);
}

function generatePass() {
    for(let i = 0; i < passLength; i++) {
        password1 += characters[randomCharIndex()];
        password2 += characters[randomCharIndex()];
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
