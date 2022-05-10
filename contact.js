var array = [];
var firstN = document.querySelector("#firstName");
var lastN = document.querySelector("#lastName");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var comments = document.querySelector("#comments");
const signupBtn = document.querySelector("#signupbtn");
const checkbox = document.querySelector("#checkbox");

function saveInfo() {
    array.unshift(firstN.value, lastN.value, email.value, password.value, comments.value, checkbox.value);
    console.log(array);
    localStorage.setItem('Sign up info', JSON.stringify(array));
};

signupBtn.addEventListener('click', function() {
    saveInfo();
    // console.log(firstN.value, firstN.textContent);
    alert("Info is saved, thank you! (check local storage)");
});

function renderInfo() {
    var prevInfo = JSON.parse(localStorage.getItem('Sign up info'));
    if (prevInfo !== null) {
        array = prevInfo
        firstN.value = prevInfo[0];
        lastN.value = prevInfo[1];
        email.value = prevInfo[2];
        password.value = prevInfo[3];
        comments.value = prevInfo[4];
        checkbox.value = prevInfo[5];
        alert("We've loaded your previous login info!");
    }
};

renderInfo();   