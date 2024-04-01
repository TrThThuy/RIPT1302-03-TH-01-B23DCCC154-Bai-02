document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("TrThThuy").value;
    const password = document.getElementById("passw").value;
  
    if (username === "admin" && password === "admin") {
      window.location.href = "admin.html";
    } else {
      document.getElementById("error-message").textContent = "Tài khoản hoặc mật khẩu không chính xác";
    }
  });
  