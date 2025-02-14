const container = document.querySelector("#container")

function createGridRow() {
    const row = document.createElement("div")
    row.className = "row"
    row.style.display = "flex"
    for (let index = 0; index < 16; index++) {
        const gridItem = document.createElement("div")
        gridItem.setAttribute("style", "width: 25px; height: 25px; border: 1px solid black;")
        row.appendChild(gridItem)
    }
    container.appendChild(row)
}

function createGrid() {
    for (let index = 0; index < 16; index++) {
        createGridRow()
    }
}
 createGrid()