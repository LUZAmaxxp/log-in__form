let person1 = { mail: "hiwiw2@gmail.com", password: "hiwiw" };
function checkin(event) {
  event.preventDefault();
  let x = document.getElementById("numb").value;
  let y = document.getElementById("emb").value;
  let text;
  if (x === person1.mail && y === person1.password) {
    text = "welcome!";
    return (document.getElementById("demo").innerHTML = text);
  } else {
    text = "your e-mail and password are incorrect !";
    return (document.getElementById("demo").innerHTML = text);
  }
}
