const container = document.querySelector('.container')
const slider = document.querySelector('input')
const buttons = document.querySelectorAll('button')
let colourOption = 'black'
let gridItems = document.querySelectorAll('div')

function createGrid(size) {
    let spotNumber = 1;
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div')
    row.style.cssText = 'display:flex; margin: 0; padding: 0; max-width: 100%; min-width:100%; min-height: 0%; flex-shrink: 1;'
    for (let h = 0; h < size; h++) {  
        const gridItem = document.createElement('div')
        gridItem.setAttribute('id', spotNumber)
        spotNumber++;
        let dimension = 500 / size
        gridItem.style.cssText = 'border: 1px solid rgba(236, 236, 236, 0.5); margin: 0; padding: 0;'
        gridItem.style.width = dimension + 'px'
        gridItem.style.height = dimension + 'px'

        row.append(gridItem)
    }
    container.append(row)
  }
  addHover()
}

function hover(e) {
    if (e == 'container' || e == "") return;
    const column = document.getElementById(e)
    if (colourOption == 'rainbow') {
        rainbowMode(column)
    } else {
        column.style.backgroundColor = 'black'
        if (colourOption == 'gradual') {
            gradualBlack(column)
        }
    }
}

function rainbowMode(column) {
    if (column.style.backgroundColor != '') return;
    column.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}

function gradualBlack(column) {
  if (column.style.opacity == '') {
        column.style.opacity = 0.1
    } else {
        let opacity = parseFloat(column.style.opacity) + 0.1
        column.style.opacity = opacity
    }
}

function addHover() {
    let gridItems = document.querySelectorAll('div')
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            hover(item.id)
        })
    });
}

function clear() {
    let gridItems = document.querySelectorAll('div')
    gridItems.forEach(item => {
        item.style.background = ''
        item.style.opacity = ''
    });
}


slider.addEventListener('mouseup', () => {
    const sliderValue = document.getElementById('rangeValue')
    container.innerHTML = ''
    createGrid(parseInt(sliderValue.textContent, 10))
})

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clear()
        if (button.classList.value == 'black' ) {
            colourOption = 'black'
        } else if (button.classList.value == 'rainbow') {
            colourOption = 'rainbow'
        } else if (button.classList.value == 'gradual') {
            colourOption = 'gradual'
        } else {
            clear()
        }
    })
});

createGrid(size = 16);
