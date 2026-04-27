 const inputs = document.querySelectorAll(".otp-input");
    const error = document.getElementById("errorMsg");
    const btn = document.getElementById("continueBtn");

    // Auto move forward
    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      // Backspace go back
      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
          inputs[index - 1].focus();
        }
      });
    });

    // Paste OTP
    document.addEventListener("paste", (e) => {
      const paste = e.clipboardData.getData("text").slice(0, 6);
      if (!paste) return;

      inputs.forEach((input, i) => {
        input.value = paste[i] || "";
      });
    });

    function checkOtp() {
      let otp = "";
      inputs.forEach(input => otp += input.value);

      error.classList.add("hidden");

      if (otp.length < 6) {
        error.innerText = "Please enter complete OTP";
        error.classList.remove("hidden");
        return false;
      }

      // Loading state
      btn.innerText = "Verifying...";
      btn.disabled = true;

      return true;
    }

    // Resend timer
    let timeLeft = 30;
    const resendBtn = document.getElementById("resendBtn");

    const timer = setInterval(() => {
      timeLeft--;
      resendBtn.innerText = `Resend (${timeLeft}s)`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        resendBtn.innerText = "Resend";
        resendBtn.classList.remove("text-gray-400", "cursor-not-allowed");
        resendBtn.classList.add("text-[#2d1a12]", "cursor-pointer");

        resendBtn.onclick = () => {
          alert("OTP resent!");
          location.reload();
        };
      }
    }, 1000);