
function send(e) {
  let checkError = true
  const target = e.target
  e.preventDefault()
  const values = {}
  document.querySelectorAll(".text-invalid").forEach((item)=>item.remove())
  for (let index of target) {
    values[index.name] = index.value
    if (!handleError(index.value, index.name, index)) {
      checkError = false
      index.classList.add("input-invalid")
    } else {
      index.classList.remove("input-invalid")
    }
  }
  if (checkError) {
    // localStorage.setItem("firstname", values.firstname)
    // localStorage.setItem("lastname", values.lastname)
    // localStorage.setItem("country", values.country)
    // localStorage.setItem("subject", values.subject)

    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    document.querySelectorAll(".input-text").forEach(item => item.value = '')
    setTimeout(() => {
      window.location.href = "hello.html"
    }, 8000);

  }
}
function showMessageError(input, text) {
  const div = document.createElement("div")
  div.classList.add("text-invalid")
  div.innerText = text
 
  input.parentElement.appendChild(div)
}
function handleError(value, name, ele) {
  switch (name) {
    case "firstname":
      if (!value) {
        showMessageError(ele, "please enter firstname")
        return false
      }
      if (value.length < 3) {
        showMessageError(ele, "please enter firstname more than 3")
        return false
      }
      return true
    case "lastname":
      if (!value) {
        showMessageError(ele, "please enter lastname")
        return false
      }
      return true

    default:
      return true
  }

}

