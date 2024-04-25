const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorMsg = document.getElementById("error");
const formContainer = document.getElementById("form__container");
const msgContainer = document.getElementById("message__container");
const displayEmail = document.getElementById("display__email");
const dismissed = document.getElementById('dismissed');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!email.value.match(emailRegex)){
        errorMsg.style.display = "inline";
        email.style.backgroundColor = "rgba(221, 44, 0, 0.2)";
        email.style.color = "rgba(255, 0, 0, 0.6)";
        email.style.border = "3px solid rgba(255, 44, 0, 0.2)";
    } else {
        errorMsg.style.display = "none";
        email.style.backgroundColor = "";
        email.style.color = "";
        email.style.border = "";
        formContainer.style.display = "none";
        msgContainer.style.display = "flex";
        displayEmail.textContent=email.value;
    }
});

dismissed.addEventListener('click', ()=>{
    formContainer.style.display = "";
    msgContainer.style.display = "none";
});


