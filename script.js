function checkPassword() {
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "10เมษายน2568"; // ← ใส่รหัสของคุณตรงนี้

  if (passwordInput === correctPassword) {
    window.location.href = "home.html";
  } else {
    alert("รหัสผ่านไม่ถูกต้อง ลองอีกครั้งนะคะหนูน้ำมล 💡");
  }
}
