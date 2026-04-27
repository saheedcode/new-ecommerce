 function togglePassword(id) {
      const input = document.getElementById(id);
      input.type = input.type === "password" ? "text" : "password";
    }

    function validatePassword() {
      const p = document.getElementById("password").value;
      const c = document.getElementById("confirm").value;
      const error = document.getElementById("errorMsg");
      const btn = document.getElementById("updateBtn");

      // Reset error
      error.classList.add("hidden");

      // Empty check
      if (!p || !c) {
        error.innerText = "Please fill all fields";
        error.classList.remove("hidden");
        return false;
      }

      // Length check
      if (p.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        error.classList.remove("hidden");
        return false;
      }

      // Match check
      if (p !== c) {
        error.innerText = "Passwords do not match";
        error.classList.remove("hidden");
        return false;
      }

      // Loading state
      btn.innerText = "Updating...";
      btn.disabled = true;

      return true; // go to success.html
    }