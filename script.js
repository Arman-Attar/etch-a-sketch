const container = document.querySelector('.container')
const slider = document.querySelector('input')
const buttons = document.querySelectorAll('button')

let colorOption = 'black'

slider.addEventListener('mouseup', () => {
    let value = slider.value
    container.innerHTML = ''
    createGrid(value)
})

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clear()
        if (button.classList.value == 'black' ) {
            colorOption = 'black'
        } else if (button.classList.value == 'rainbow') {
            colorOption = 'rainbow'
        } else if (button.classList.value == 'gradual') {
            colorOption = 'gradual'
        } else {
            clear()
        }
    })
});


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


function addHover() {
    let square = document.querySelectorAll('div')
    square.forEach(element => {
        element.addEventListener('mouseenter', () => {
            hover(element.id)
        })
    });
}

function hover(id) {
    if (id == 'container' || id == "") return
    const square = document.getElementById(id)
    if (colorOption == 'rainbow') {
        rainbowMode(square)
    } else {
        square.style.backgroundColor = 'black'
        if (colorOption == 'gradual') {
            gradualBlack(square)
        }
    }
    
}

function rainbowMode(square) {
    if (square.style.backgroundColor = '') return
    square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
}

function gradualBlack(square) {
    if (square.style.opacity == '') {
        square.style.opacity = 0.1
    } else {
        let opacity = parseFloat (square.style.opacity) + 0.1
        square.style.opacity = opacity
    }
}

function clear() {
    let gridItems = document.querySelectorAll('div')
    gridItems.forEach(item => {
        item.style.background = ''
        item.style.opacity = ''
    });
}




createGrid(16)