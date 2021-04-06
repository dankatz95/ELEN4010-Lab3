const button = document.getElementById('addButton')

button.addEventListener('click', function () {
  const paragraph = document.createElement('p')
  const text = document.createTextNode('Daniel Katz')
  const yomama = document.createTextNode('Yo Mama')
  paragraph.appendChild(text)
  paragraph.appendChild(yomama)
  document.body.appendChild(paragraph)
}, false)
