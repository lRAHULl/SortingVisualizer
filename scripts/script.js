window.onload(generateNewArray(100))

let generate = document.getElementById(generate)

generate.onclick(generateNewArray)
var globalArr;

function generateNewArray(size) {
  let array = []
  let parentDiv = document.getElementById('parent')
  parentDiv.innerHTML = "<div id=first></div>" // for the default height

  for (let i = 0; i < size; i++) {
    newNum = generateRandomNumber(5, 1000)
    array.push(newNum)
    var div = document.createElement('div')
    div.className = "array-bar"
    div.style.width = `${98.0 / size}%`
    div.style.height = `${(newNum / 1000) * 95}%`
    div.style.margin = 0
    // div.textContent = newNum
    parentDiv.appendChild(div)
  }
  console.log(array);
  globalArr = array
  return array
}


function generateRandomNumber(lowerBound, upperBound) {
  return Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound)
}

// function sort() {
  
// }

function bubbleSort() {
  
  for (let i = globalArr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (globalArr[j] > globalArr[j + 1]) {
        
          swap(globalArr, j, j + 1)
        
      }
    }
  }
  // console.log(globalArr);
}



function insertionSort() {
  let htmlItems = document.getElementsByClassName('array-bar')
  for (let i = 1; i < globalArr.length; i++) {
    currentValue = globalArr[i]
    for (j = i - 1; j >= 0 && globalArr[j] > currentValue ;j--) {

      htmlItems[j + 1].style.height =  `${(globalArr[j] / 1100) * 100}%`
      globalArr[j + 1] = globalArr[j]

    }
    htmlItems[j + 1].style.height = `${(currentValue / 1100) * 100}%`
    globalArr[j + 1] = currentValue
  }
  console.log(globalArr);
}

function swap(array, i, j) {
  let htmlItems = document.getElementsByClassName('array-bar')
  htmlItems[i].style.height = `${(array[j] / 1100) * 100}%`
  htmlItems[j].style.height = `${(array[i] / 1100) * 100}%`
  temp = array[i]
  array[i] = array[j]
  array[j] = temp
}