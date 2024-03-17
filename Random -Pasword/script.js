
const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "@#$&";

const allchars = upperCase + lowerCase + numbers + symbol;

function getpassword() {
    let password = "";

    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + symbol[Math.floor(Math.random()*symbol.length)]
    password = password + numbers[Math.floor(Math.random() * numbers.length)]
    
    while (length > password.length) {
        password = password + allchars[Math.floor(Math.random() * allchars.length)]  
    }
    passwordBox.value = password;
}

