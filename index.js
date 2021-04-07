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

for (let i = 0; i < 5; i++) {
  const section = document.getElementById(`Student ${i + 1}`)
  for (let j = 0; j < 2; j++) {
    const data = document.createElement('td')
    let text
    if (j === 0) {
      text = document.createTextNode(`${students[i].name}`)
    } else {
      text = document.createTextNode(`${students[i].studentNumber}`)
    }

    data.appendChild(text)
    section.appendChild(data)
  }
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
