function checkin(email, password) {
  let PasswordRegex = /^[A-Za-z]\w{7,14}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email) && PasswordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
}

function signin(event) {
  event.preventDefault();
  let email = document.getElementById("numb").value;
  let password = document.getElementById("emb").value;
  if (checkin(email, password)) {
    let userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      let userExists = userData.find(
        (user) => user.email === email && user.password === password
      );

      if (userExists) {
        window.location.replace("../../calculator-project-/calculator.html");
      } else {
        alert("Invalid email or password. Please try again.");
        event.preventDefault();
      }
    }
  }
}
