document.addEventListener("DOMContentLoaded", function () {
    generateCaptcha();
});

function generateCaptcha() {
    var captchaText = generateRandomString(6);
    document.getElementById("captchaText").textContent = captchaText;
}

function generateRandomString(length) {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function validateCaptcha() {
    var enteredText = document.getElementById("inputCaptcha");
    var captchaText = document.getElementById("captchaText").textContent;
    var feedback = document.getElementById("feedback")
    if (enteredText.value !== captchaText) {
            feedback.textContent = "کپچا نادرست است.";
            enteredText.style.borderBottom = "2px solid red";
        generateCaptcha();
    } 
    else{
        enteredText.style.borderBottom = '1px solid #c7c7c7';
        feedback.textContent = "";
    }
}


function validateForm() {
    const email = document.getElementById("InputEmail");
    const password = document.getElementById("InputPassword");
    const emailError = document.getElementById('useError');
    const passError = document.getElementById('passError');
    const emailPattern = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passMess = document.getElementById('passwordHelpBlock');

    function setError(element, message) {
        element.style.borderBottom = "2px solid red";
        if (element === email) {
            emailError.innerHTML = message;
        }
        if (element === password) {
            passError.innerHTML = message;
            passMess.style.display="none";
        }
    }

    let isValid = true;

    // Check email
    if (email.value.trim() === "") {
        setError(email, 'ایمیل نمیتواند خالی باشد.');
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        setError(email, 'ایمیل نامعتبر است.');
        isValid = false;
    } else {
        email.style.borderBottom = '1px solid #c7c7c7';
        emailError.innerHTML = '';
    }

    // Check password
    if (password.value.trim() === "") {
        setError(password, 'رمز عبور نمیتواند خالی باشد.');
        isValid = false;
    } else if (password.value.trim().length < 8) {
        setError(password, 'رمز عبور باید حداقل 8 کاراکتر داشته باشد.');
        isValid = false;
    } else if (!/[0-9]/.test(password.value) || !/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value)) {
        setError(password, 'رمز عبور باید شامل حداقل یک عدد، یک حرف بزرگ و یک حرف کوچک باشد.');
        isValid = false;
    } else {
        password.style.borderBottom = '1px solid #c7c7c7';
        passError.innerHTML = '';
    }
    validateCaptcha()
    return isValid;
}





// const btnContainer = document.getElementById("btnContainer");
// const signinBtn = document.getElementById("signinButton");
// const signupBtn = document.getElementById("signupButton");
// const signinForm = document.getElementById("signinForm");
// const signupForm = document.getElementById("signupForm");

// signinBtn.addEventListener('click', function(){
//     signupBtn.classList.remove("signin-btn")
//     signinBtn.classList.add("signin-btn")
//     signinForm.classList.remove("hidden")
//     signupForm.classList.add("hidden")
// })
// signupBtn.addEventListener('click', function(){
//     signinBtn.classList.remove("signin-btn")
//     signupBtn.classList.add("signin-btn")
//     signupForm.classList.remove("hidden")
//     signinForm.classList.add("hidden")
// })

