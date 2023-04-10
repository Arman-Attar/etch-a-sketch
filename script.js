const container = document.querySelector('.container')

function createGrid() {
    let spotNumber = 1;
  for (let i = 0; i < 16; i++) {
    const row = document.createElement('div')
    row.style.cssText = 'display:flex;'
    for (let h = 0; h < 16; h++) {  
        const gridItem = document.createElement('div')
        gridItem.setAttribute('id', spotNumber)
        //gridItem.classList.add(spotNumber)
        spotNumber++;
        gridItem.style.cssText = 'border: 0.5px solid black; width: 30px; height: 30px; margin: 0; padding: 0;'
        row.append(gridItem)
    }
    container.append(row)
  }
}

createGrid();

function hover(e) {
    console.log(e)
    if (e == 'container') return;
    const column = document.getElementById(e)
    column.style.backgroundColor = 'black'
}

const gridItems = document.querySelectorAll('div')

gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        //console.log(item.classList.value)
        hover(item.id)
    })
});