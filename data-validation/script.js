function validated () {
  var emailInput = document.getElementById('mail').value
  var passwordInput = document.getElementById('Pass').value

  // Регулярные выражения для валидации электронной почты и пароля
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

  if (!emailRegex.test(emailInput)) {
    document.getElementById('InvalidEmail').style.display = 'block'
    document.getElementById('InvalidPassword').style.display = 'none'
    return false
  } else if (!passwordRegex.test(passwordInput)) {
    document.getElementById('InvalidEmail').style.display = 'none'
    document.getElementById('InvalidPassword').style.display = 'block'
    return false
  } else {
    document.getElementById('InvalidEmail').style.display = 'none'
    document.getElementById('InvalidPassword').style.display = 'none'
    window.location.href = 'login.html'
    return true
  }
}
