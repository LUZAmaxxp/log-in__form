function checkin(emqil, password) {
  let text;
  let PasswordRegex = /^[A-Za-z]\w{7,14}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emqil) && PasswordRegex.test(password)) {
    text = " Welcome !";
    document.getElementById("demo").innerHTML = text;
    return true;
  } else {
    text = "please enter a valid email and password";
    document.getElementById("demo").innerHTML = text;
    return false;
  }
}
function addUser(event) {
  event.preventDefault();
  let emqil = document.getElementById("numb").value;
  let password = document.getElementById("emb").value;
  if (checkin(emqil, password)) {
    let myuser = JSON.parse(localStorage.getItem("userData"));

    if (myuser === null) {
      let userData = [];
      userData.push({ emqil, password });
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      myuser.push({ emqil, password });
      localStorage.setItem("userdata", JSON.stringify(myuser));
    }
  } else {
    return "failed to add user";
  }
}
