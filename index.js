const maze = document.getElementById('maze')
const options = {
    width: 10,
    height: 10
}

// create a maze using options width for rows and height for cell
// 'tr' is a table row element and 'td' is a table cell element
const createMaze = () => {
    // Reset all rows and cells when input change
    const rows = document.querySelectorAll('.row')
    const cell = document.querySelectorAll('.cell')
    rows.forEach(row => row.remove())
    cell.forEach(cell => cell.remove())	

    for (let i = 1; i <= options.width; i++) {
        const tr = document.createElement('tr')
        tr.classList.add('row')
        for (let j = 1; j <= options.height; j++) {
            td = document.createElement('td')
            td.classList.add('cell')
            td.innerHTML = i + ':' + j
            tr.append(td)
        }
        maze.append(tr)
    }
}
createMaze()

// customize the rows
const rowValue = document.getElementById('rowChange')
const customizeRows = () => {
    options['width'] = rowValue.value
    createMaze()
}
rowValue.addEventListener('input', customizeRows)

// customize the cells
const cellValue = document.getElementById('cellChange')
const customizeCells = () => {
    options['height'] = cellValue.value
    createMaze()
}
cellValue.addEventListener('input', customizeCells)