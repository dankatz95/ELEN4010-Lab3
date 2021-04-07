'use strict'
const students = [
  {
    name: 'Daniel',
    studentNumber: 1854147
  },
  {
    name: 'Daniella',
    studentNumber: 1479236
  },
  {
    name: 'Sean',
    studentNumber: 1876254
  },
  {
    name: 'Themba',
    studentNumber: 851478
  },
  {
    name: 'Johan',
    studentNumber: 1456987
  }
]

const studentHolder = document.getElementById('myDiv')

for (let i = 0; i < 5; i++) {
  const student = document.createElement('p')

  const text = document.createTextNode(`Name: ${students[i].name} --- Std num:  ${students[i].studentNumber}`)

  student.appendChild(text)

  studentHolder.appendChild(student)
}

document.getElementById('myDiv').style.display = 'none'

let a = 1

const showHide = function () {
  if (a === 1) {
    document.getElementById('myDiv').style.display = 'block'
    return (a = 0)
  } else {
    document.getElementById('myDiv').style.display = 'none'
    return (a = 1)
  }
}

const view = document.getElementById('viewButton')

view.addEventListener('click', showHide, false)
