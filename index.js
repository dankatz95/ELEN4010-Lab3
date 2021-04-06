const button = document.getElementById('addButton')

button.addEventListener('click', function () {
  const paragraph = document.createElement('p')
  const text = document.createTextNode('This is a student')
  paragraph.appendChild(text)
  const students = document.getElementById('studentList')
  students.appendChild(paragraph)
}, false)

const photoButton = document.getElementById('addPhoto')

photoButton.addEventListener('click', () => {
  const image = document.createElement('img')
  image.src = 'A1_Visa.jpg'
  image.style.width = '100px'
  document.body.appendChild(image)
}, false)
