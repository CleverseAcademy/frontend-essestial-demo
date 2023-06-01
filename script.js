const frontendInput = document.getElementById("frontend")

const frontendButton = document.getElementById("add-front")

const frontendMilestonesList = document.getElementById("frontend-milestone")

frontendButton.addEventListener("click", (e) => {
  e.preventDefault()
  const newList = document.createElement("li")
  // <li></li>
  newList.textContent = frontendInput.value
  // <li>value</li>

  frontendMilestonesList.appendChild(newList)
})

const backendInput = document.getElementById("backend")

const backendButton = document.getElementById("add-back")

const backendMilestonesList = document.getElementById("backend-milestone")

backendButton.addEventListener("click", (e) => {
  e.preventDefault()
  const newList = document.createElement("li")

  newList.textContent = backendInput.value

  backendMilestonesList.appendChild(newList)
})
