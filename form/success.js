  // Auto redirect after 5 seconds
    let timeLeft = 5;
    const text = document.getElementById("redirectText");

    const timer = setInterval(() => {
      timeLeft--;
      text.innerText = `Redirecting to login in ${timeLeft} seconds...`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        window.location.href = "login.html";
      }
    }, 1000);



/*
    What 1000 means
1000 = 1000 milliseconds
1000 milliseconds = 1 second

So this means:

“Run this function every 1 second.
*/