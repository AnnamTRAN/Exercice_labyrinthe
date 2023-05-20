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
    // random treasure location's variable
    randomRow = Math.floor((Math.random() * options.width) + 1)
    randomCell = Math.floor((Math.random() * options.height) + 1)

    for (let i = 1; i <= options.width; i++) {
        const tr = document.createElement('tr')
        tr.classList.add('row')
        for (let j = 1; j <= options.height; j++) {
            td = document.createElement('td')
            td.classList.add('cell')
            console.log(randomRow, randomCell)
            if (i === 1 && j === 1) {   // main character id
                main_c = document.createElement('div')
                main_c.setAttribute('id','main-character')
                td.append(main_c)
            } else if (i === randomRow && j === randomCell) { // random treasure
                treasure = document.createElement('div')
                treasure.setAttribute('id', 'treasure')
                td.append(treasure)
            }else { // maze cell divs
                div = document.createElement('div')
                div.innerHTML = i + ':' + j
                td.append(div)
            }
            tr.append(td)
        }
        maze.append(tr)
    }
}
createMaze()

// customize the rows
const rowValue = document.getElementById('rowChange')

const customizeRows = (event) => { // on enter key press change number of rows
    if (event.keyCode === 13) {
    options['width'] = rowValue.value
    createMaze()
    }
}

rowValue.addEventListener('keypress', customizeRows)

// customize the cells
const cellValue = document.getElementById('cellChange')

const customizeCells = (event) => { // on enter key press change number of cells
    if (event.keyCode === 13) {
        options['height'] = cellValue.value
        createMaze()
    }
}

cellValue.addEventListener('keypress', customizeCells)

// random maze 
