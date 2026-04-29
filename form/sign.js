   const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')
    const phoneNumber = document.getElementById('phoneNumber')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')
    const termsAccepted = document.getElementById('terms')
    const signupForm = document.getElementById('signupForm')
    const submitBtn = document.getElementById('submitBtn')
    const statusMsg = document.getElementById('statusMsg')

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault()

      const firstNameVal = firstName.value.trim()
      const lastNameVal = lastName.value.trim()
      const emailVal = email.value.trim()
      const phoneNumberVal = phoneNumber.value.trim()
      const passwordVal = password.value
      const confirmPasswordVal = confirmPassword.value
      const termAcceptedVal = termsAccepted.checked

      // VALIDATION
      if (firstNameVal.length < 2 || lastNameVal.length < 2) {
        return alert("First Name and Last Name must be at least 2 characters")
      }

      if (!passwordVal || !confirmPasswordVal) {
        return alert("Please enter your password")
      }

      if (passwordVal !== confirmPasswordVal) {
        return alert("Passwords do not match")
         
       
      
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(emailVal)) {
        return alert("Enter a valid email")
      }

      if (phoneNumberVal.length !== 11 || isNaN(phoneNumberVal)) {
        return alert("Enter a valid 11-digit phone number")
      }

      if (!termAcceptedVal) {
        return alert("You must agree to the terms")
      }

      // PROCESSING (no color change)
      submitBtn.textContent = "Processing..."
      submitBtn.disabled = true

      setTimeout(() => {

        const userinfo = {
          fName: firstNameVal,
          lName: lastNameVal,
          email: emailVal,
          phone: phoneNumberVal,
          password: passwordVal
        }

        localStorage.setItem('userInfo', JSON.stringify(userinfo))
//const savedItems = localStorage.getItem(userInfo)
//const  savedUser = Json.parse(savedItems)
        // RESET BUTTON
        submitBtn.textContent = "Sign Up"
        submitBtn.disabled = false

        // SUCCESS MESSAGE
        statusMsg.textContent = "Signup successful ✅"
        statusMsg.classList.add("text-green-600", "font-semibold")

        // REDIRECT
        setTimeout(() => {
          window.location.href = "login.html"
        }, 2000)

      }, 1500)
    })