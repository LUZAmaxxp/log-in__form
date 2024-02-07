function checkin(email, password) {
  let text;
  let PasswordRegex = /^[A-Za-z]\w{7,14}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email) && PasswordRegex.test(password)) {
    text = " Welcome !";
    document.getElementById("bemo").innerHTML = text;
    window.location.href = "";
    return true;
  } else {
    text = "please enter a valid email and password";
    document.getElementById("bemo").innerHTML = text;
    return false;
  }
}
function addUser(event) {
  event.preventDefault();
  let email = document.getElementById("numb").value;
  let password = document.getElementById("emb").value;
  if (checkin(email, password)) {
    let myuser = JSON.parse(localStorage.getItem("userData"));
    if (myuser === null) {
      let userData = [];
      userData.push({ email, password });
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      myuser.push({ email, password });
      localStorage.setItem("userdata", JSON.stringify(myuser));
    }
  } else {
    return "failed to add user";
  }
}

function redirect(event) {
  event.preventDefault();
  window.location.replace("../signin/signin.html");
}
