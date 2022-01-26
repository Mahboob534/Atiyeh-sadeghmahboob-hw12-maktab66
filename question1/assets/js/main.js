const lblFirstName = document.getElementById("fError")
const lblLastName = document.getElementById("lError")
const inputFirstname = document.getElementById("fname")
const inputLastname = document.getElementById("lname")
function send(e) {
  lblFirstName.innerText = ""
  inputLastname.innerText = ""
  const target = e.target
  e.preventDefault()
  const values = {}
  for (let index of target) {
    values[index.name] = index.value
  }
  if (values.firstname === "") {
    lblFirstName.innerText = "please enter FirstName"
    inputFirstname.style.borderColor = "red"
  }
  if (values.firstname.length < 3 && values.firstname !== "") {
    lblFirstName.innerText = "please enter firstname more than 3 caracters"
    inputFirstname.style.borderColor = "red"
  }
  if (values.lastname === "") {
    lblLastName.innerText = "please enter LastName"
    inputLastname.style.borderColor = "red";
  
  }
  if(values.firstname !== "" && values.lastname !== ""){
  localStorage.setItem("firstname", values.firstname)
  localStorage.setItem("lastname", values.lastname)
  localStorage.setItem("country", values.country)
  localStorage.setItem("subject", values.subject)

  var modal = document.getElementById("myModal");
  modal.style.display = "block";

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
setTimeout(()=>{
  modal.style.display = "none"
}, 8000);
document.querySelectorAll(".input-text").forEach(item => item.value='')
}
}


