   function validateEmail() {
      const email = document.getElementById("email").value.trim();
      const error = document.getElementById("errorMsg");
      const btn = document.getElementById("resetBtn");

      // Reset error
      error.classList.add("hidden");

      // Check empty
      if (!email) {
        error.innerText = "Please enter your email";
        error.classList.remove("hidden");
        return false;
      }

      // Email format check
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        error.innerText = "Enter a valid email address";
        error.classList.remove("hidden");
        return false;
      }

      // Loading state
      btn.innerText = "Sending...";
      btn.disabled = true;

      return true; // go to otp.html
    }