
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
}*/