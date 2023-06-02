const getCourses = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses")
    // console.log(response)

    const data = await response.json()
    // console.log(data)

    data.courses.forEach((course) => {
      console.log(course)
    })
  } catch (err) {
    console.log(err)
  }
}

getCourses()

// data
//   .then((res) => {
//     console.log(res)
//     data2
//       .then((res) => {
//         console.log(res)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// const frontendInput = document.getElementById("frontend")

// const frontendButton = document.getElementById("add-front")

// const frontendMilestonesList = document.getElementById("frontend-milestone")

// frontendButton.addEventListener("click", (e) => {
//   e.preventDefault()
//   const newList = document.createElement("li")
//   // <li></li>
//   if (!frontendInput.value) {
//     alert("Please input something!")
//   } else {
//     newList.textContent = frontendInput.value
//     frontendMilestonesList.appendChild(newList)
//   }
//   // <li>value</li>
// })

// const backendInput = document.getElementById("backend")

// const backendButton = document.getElementById("add-back")

// const backendMilestonesList = document.getElementById("backend-milestone")

// backendButton.addEventListener("click", (e) => {
//   e.preventDefault()
//   const newList = document.createElement("li")

//   if (!backendInput.value) {
//     alert("Please input something!")
//   } else {
//     newList.textContent = backendInput.value
//     backendMilestonesList.appendChild(newList)
//   }
// })
