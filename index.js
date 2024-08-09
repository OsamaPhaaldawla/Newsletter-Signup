let form = document.querySelector(".content form");
let main_container = document.querySelector("main .container");
let email = "";
let email_span = document.querySelector("span.email");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let value = emailValidation(e);
    if (value == "Not valid") {
        e.preventDefault();
        document.querySelector(".invalid").style.display = "inline";
        document.querySelector('[type="email"]').classList.add("notValid");
    } else if (value == "Valid") {
        e.preventDefault();
        main_container.style.display = "none";
        success_message.style.display = "flex";
        console.log(
            document.querySelector('.content form input[type="email"]').value
        );
        email = document.querySelector('.content form input[type="email"]').value;
        email_span.innerHTML = email;
    }
});

let success_message = document.querySelector(".success-message");
let dismiss_btn = document.querySelector(".success-message button");
dismiss_btn.addEventListener("click", () => {
    form.submit();
});

let img = document.querySelector(".image img");
window.onresize = () => {
    if (window.outerWidth <= 680) {
        img.src = "assets/images/illustration-sign-up-mobile.svg";
    } else {
        img.src = "assets/images/illustration-sign-up-desktop.svg";
    }
};
if (window.outerWidth <= 680) {
    img.src = "assets/images/illustration-sign-up-mobile.svg";
}

// Email Validation
let emailFeild = document.getElementById("email");

function emailValidation(e) {
    if (emailFeild.value.match(/^\d/g)) {
        return "Not valid";
    } else if (emailFeild.value.match(/\w+@\w+\.com/g) == null) {
        return "Not valid";
    } else {
        return "Valid";
    }
}