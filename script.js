const frontendInput = document.getElementById("frontend")

const frontendButton = document.getElementById("add-front")

const frontendMilestonesList = document.getElementById("frontend-milestone")

frontendButton.addEventListener("click", (e) => {
  e.preventDefault()
  const newList = document.createElement("li")
  // <li></li>
  if (!frontendInput.value) {
    alert("Please input something!")
  } else {
    newList.textContent = frontendInput.value
    frontendMilestonesList.appendChild(newList)
  }
  // <li>value</li>
})

const backendInput = document.getElementById("backend")

const backendButton = document.getElementById("add-back")

const backendMilestonesList = document.getElementById("backend-milestone")

backendButton.addEventListener("click", (e) => {
  e.preventDefault()
  const newList = document.createElement("li")

  if (!backendInput.value) {
    alert("Please input something!")
  } else {
    newList.textContent = backendInput.value
    backendMilestonesList.appendChild(newList)
  }
})
