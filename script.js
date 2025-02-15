const container = document.querySelector('.container')




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
}



createGrid(16)