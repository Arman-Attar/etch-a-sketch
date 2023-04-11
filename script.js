const container = document.querySelector('.container')

function createGrid(size) {
    let spotNumber = 1;
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div')
    row.style.cssText = 'display:flex; margin: 0; padding: 0;'
    for (let h = 0; h < size; h++) {  
        const gridItem = document.createElement('div')
        gridItem.setAttribute('id', spotNumber)
        spotNumber++;
        let dimension = 500/size - 1
        gridItem.style.cssText = 'border: 0.1px solid black; margin: 0; padding: 0;'
        gridItem.style.width = dimension + 'px'
        gridItem.style.height = dimension + 'px'

        row.append(gridItem)
    }
    container.append(row)
  }
  addHover()
}

createGrid(size = 80);

let gridItems = document.querySelectorAll('div')

function hover(e) {
    if (e == 'container' || e == "") return;
    const column = document.getElementById(e)
    column.style.backgroundColor = 'black'
}

const slider = document.querySelector('input')

slider.addEventListener('mouseup', () => {
    const sliderValue = document.getElementById('rangeValue')
    container.innerHTML = ''
    createGrid(parseInt(sliderValue.textContent, 10))
})

function addHover() {
    let gridItems = document.querySelectorAll('div')
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            hover(item.id)
        })
    });
}


