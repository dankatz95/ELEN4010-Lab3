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

const changeName = function (x, Name) {
  students[x].name = Name
}

const changeStdNum = function (x, Num) {
  students[x].studentNumber = Num
}
// initial list
for (let i = 0; i < 5; i++) {
  const section = document.getElementById(`Student ${i + 1}`)
  for (let j = 0; j < 3; j++) {
    const data = document.createElement('td')
    let text
    if (j === 0) {
      text = document.createTextNode(`${students[i].name}`)
    } else if (j === 1) {
      text = document.createTextNode(`${students[i].studentNumber}`)
    } else {
      text = document.createElement('button')
      text.id = `edit${i}`
      const edit = document.createTextNode('edit')
      text.appendChild(edit)
    }

    data.appendChild(text)
    section.appendChild(data)
  }
}

document.getElementById('myDiv').style.display = 'none'

let a = 1

const showHide = function () {
  if (a === 1) {
    document.getElementById('myDiv').style.display = 'inline'
    return (a = 0)
  } else {
    document.getElementById('myDiv').style.display = 'none'
    return (a = 1)
  }
}

const view = document.getElementById('viewButton')

view.addEventListener('click', showHide, false)

const editStudents = () => {
  const buttonName = document.createElement('button')
  buttonName.type = 'button'
  buttonName.id = 'addName'
  const text = document.createTextNode('Add')
  buttonName.appendChild(text)

  const addButton = document.getElementById('addNS')
  addButton.appendChild(buttonName)

  const editName = document.getElementById('nameSpan')

  const inputName = document.createElement('input')
  inputName.type = 'text'
  inputName.value = 'Enter student name:'
  inputName.style.display = 'inline'
  inputName.id = 'editName'
  editName.appendChild(inputName)

  const addName = document.getElementById('addName')

  addName.addEventListener('click', (x) => {
    const textName = document.createTextNode(document.getElementById('editName').value)
    const par = document.createElement('p')
    par.appendChild(textName)
    document.body.appendChild(par)
  }, false)
}

const edit0 = document.getElementById('edit0')

edit0.addEventListener('click', editStudents, false)
