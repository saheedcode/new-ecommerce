function togglePassword() {
      const input = document.getElementById("password");
      input.type = input.type === "password" ? "text" : "password";
    }

    function handleLogin() {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const btn = document.getElementById("loginBtn");

      // Validation
      if (!email || !password) {
        alert("Please fill all fields");
        return false;
      }

      // Fake login check (you can upgrade later)
      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
      }

      // Loading state
      btn.innerText = "Logging in...";
      btn.disabled = true;

      // Simulate success
      setTimeout(() => {
        alert("Login Successful!");
        window.location.href = "../index.html"; // change to dashboard later
      }, 1000);

      return false; // prevent instant reload
    }