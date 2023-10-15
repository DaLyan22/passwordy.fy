//----------------catch ids and this kind of thing --------------------------------
const slidder = document.querySelector('#slidder');
const range = document.querySelector('#range');
const btn = document.querySelector('#btn');
const senha = document.querySelector('#password-generated');
const btnC = document.querySelector('.copy-btn');
let passwordCopy = "";
//------------------------------slidder value---------------------------------------
range.innerHTML = slidder.value;
slidder.oninput = function(){
    range.innerHTML = this.value
}
//---------------------------------create the password :)----------------------------
function getPassword() {
    let chars = "0123456789ABCDEFGHIJLMNOPQRSTUVWXYZ!?";
    var passwordLength = slidder.value;
    let password = "";

    for (var i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    passwordCopy = password;
    senha.innerHTML = `${password}`;
    senha.style.color = 'red';
    normalCopy();

  }
//------------------------------------copy password---------------------------------
function copyPassword(){
    if (passwordCopy == ""){
        return;
    }
    navigator.clipboard.writeText(passwordCopy);
    console.log(passwordCopy);
    btnC.style.backgroundColor = "#6e5d82"
}

function normalCopy(){
    btnC.style.backgroundColor = "#9f68e0"
}