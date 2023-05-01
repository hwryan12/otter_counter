let countElement = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let count = 0

function increment() {
  count += 1
  countElement.textContent = count
}

function save() {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  countElement.textContent = 0
  count = 0
}