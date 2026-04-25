
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const forgotForm = document.getElementById("forgotForm");
const otpForm = document.getElementById("otpForm");
const newPasswordForm = document.getElementById("newPasswordForm");
const successMessage = document.getElementById("successMessage");
const formTitle = document.getElementById("formTitle");
const toggleText = document.getElementById("toggleText");
const backButton = document.getElementById("backButton");

// 1 showlogin page
function showLogin() {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  forgotForm.classList.add('hidden');
  otpForm.classList.add('hidden');
  newPasswordForm.classList.add('hidden');
  successMessage.classList.add('hidden');

  formTitle.innerText = "Welcome Back";
  backButton.classList.add('hidden');

  toggleText.innerHTML =
    `Don't have an account?
     <span onclick="showSignup()" class="cursor-pointer text-[#2d1a12]">Sign Up</span>`;
}

//2 show signup page
function showSignup() {
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  forgotForm.classList.add('hidden');
  otpForm.classList.add('hidden');
  newPasswordForm.classList.add('hidden');
  successMessage.classList.add('hidden');

  formTitle.innerText = "Create Your Account";
  backButton.classList.remove('hidden');

  toggleText.innerHTML =
    `Already have an account?
     <span onclick="showLogin()" class="cursor-pointer text-[#2d1a12]">Login</span>`;
}


//3 show forgetpassword page
function showForgot() {
  signupForm.classList.add('hidden');
  loginForm.classList.add('hidden');
  forgotForm.classList.remove('hidden');
  otpForm.classList.add('hidden');
  newPasswordForm.classList.add('hidden');
  successMessage.classList.add('hidden');

  formTitle.innerText = "Reset Password";
  backButton.classList.add('hidden');
  toggleText.innerHTML = "";
}

//4 show handleReset
function handleReset() {
  const email = document.getElementById("resetEmail").value;

  if (!email) {
    alert("Please enter your email");
    return;
  }

  forgotForm.classList.add('hidden');
  otpForm.classList.remove('hidden');
  formTitle.innerText = "Enter OTP";
}

//5 showgo to new passwordpage
function goToNewPassword() {
  const inputs = document.querySelectorAll(".otp-input");
  let otp = "";

  inputs.forEach(input => otp += input.value);

  if (otp.length < 6) {
    alert("Enter complete OTP");
    return;
  }

  otpForm.classList.add('hidden');
  newPasswordForm.classList.remove('hidden');
  formTitle.innerText = "Create New Password";
}

// 6 show resetpassword page
function resetPassword() {
  const inputs = newPasswordForm.querySelectorAll("input");
  const password = inputs[0].value;
  const confirm = inputs[1].value;

  if (!password || !confirm) {
    alert("Fill all fields");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  newPasswordForm.classList.add('hidden');
  successMessage.classList.remove('hidden');
  formTitle.innerText = "Success";
}

function resendOtp() {
  alert("OTP resent!");
}


//7 go home function
function goHome() {
  window.location.href = "index.html"; // change if needed
}

// auto move cursor
document.addEventListener("input", function (e) {
  if (e.target.classList.contains("otp-input")) {
    if (e.target.value.length === 1) {
      const next = e.target.nextElementSibling;
      if (next) next.focus();
    }
  }
});



/*
//signup e.preventDefault() to prevent sign up button default
signupForm.addEventListener('submit',async (e) =>{
    e.preventDefault()

    const firstNameVal = firstName.value
    const lastNameval = lastName.value

form with evenlistner submit 
button evenlistner onclick
submit classlist.add(bg-black text-white) to change the text

const termAcceptedVal = termAccepted.checked

if (firstNameVal.length < 2){
return alert(enter last name)}

})


if ((firstNameVal.length < 2 && lastNameVal.lenth < 2){
return alert ("first Name and lasat Nme ")} 

//single code
if (firstNameVal.length < 2) {
  return alert("First name must be at least 2 characters");
}

if (lastNameVal.length < 2) {
  return alert("Last name must be at least 2 characters");
}
 
const pass1 = 12345678
const pass2 = '12345678'
if (pass1 !== pass2){
return alert(`password doent match`)
console.log(pass1,pass2)
}


//Regex  email regex
const emailRegex = ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

if(!emailRegex.test(emailVal)){
return alert ('please enter a valid email)}


if (emailRegex.test(emailVal) === false){
return alert ('please Enter a valid email)}

//phone 
if (phoneNumberVal.lenth !-- 11){
return alert ('invalid phone number, please check and try again'),


}

placeholder="0801246677" type="tel"

const userinfo = {
fName: firstNameVal,
lName: lastnameVal.
eM: emailVal
phone:phoneNumberVal
pass: passwordVal
}

const savedItem = JSON.strignify(userinfo)
localStorage.setItem('userInfo' savedItem)

return window.href


//new copy 
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phoneNumber')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const termsAccepted = document.getElementById('terms')
const submitBtn = document.getElementById('submitBtn')
const signupForm = document.getElementById('signupForm')


// FOR FORM SUBMISSION 


signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const firstNameVal = firstName.value.trim()
    const lastNameVal = lastName.value.trim()
    const emailVal = email.value.trim()
    const phoneNumberVal = phoneNumber.value.trim()
    const passwordVal = password.value
    const confirmPasswordVal = confirmPassword.value
    const termAcceptedVal = termsAccepted.checked

    console.log(termsAccepted, "THE html ")
    console.log(termAcceptedVal, "THE VALUEUEUEUEU ")
    
    // FIRST NAME AND LAST NAME CHECKS
    if(firstNameVal.length < 2 || lastNameVal.length < 2){
        return  alert("First Name and Last Name value must be 2 charcter and above ")
    }

    if(!passwordVal || !confirmPasswordVal ){
        return alert("Please enter your password")
    }

    console.log(passwordVal, confirmPasswordVal, "the twoooo")

    if(passwordVal !== confirmPasswordVal){
        return alert(`Password doesn't match `)
    }

    // EMAIL CHECK 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailRegex.test(emailVal), "THE REGESTSTST")
    if(emailRegex.test(emailVal) === false){
    return alert ('Please enter a valid email')
    }

    // CHECK PHONE NUMBER

    if(phoneNumberVal.length !== 11){
        return alert('Invalid Phone Number. Please check and try again')
    }

    // VALID CHECKBOCK
    if(!termAcceptedVal){
        return alert('Please agreed to the terms and conditions')
    }

    const userinfo = {
        fName: firstNameVal,
        lName: lastNameVal,
        eM : emailVal,
        phone: phoneNumberVal,
        pass: passwordVal
    }

    const savedItem = JSON.stringify(userinfo)
    localStorage.setItem('userInfo', savedItem)

    return window.href = '/login'








    // console.log(firstName, lastName, "THE VAVAVAVAVAV")
    // console.log(firstNameVal, lastNameVal, "THE VALUEES")

    // return

})
*/