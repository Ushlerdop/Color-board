const board = document.querySelector('#board');
const CELL_COUNT = 302;

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 95%, 60%)`
}

function createCell() {    
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseenter', (e) => {
        let color = getRandomColor();
        e.target.style.backgroundColor = `${color}`;
        e.target.style.boxShadow = `0 0 2px ${color}, 0 0 14px ${color}`;
    })
    cell.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = ``;
        e.target.style.boxShadow = ``;
    })
    return cell;
}

function addCellOnBoard(times) {
    for (let i = 0; i < times; i++) {
        board.append(createCell());
    }
}

addCellOnBoard(CELL_COUNT);