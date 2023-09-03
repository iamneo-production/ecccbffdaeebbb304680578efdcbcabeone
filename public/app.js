// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');

// Function to handle player moves
const ticTacToe = (cell, index) => {
    if (cells[index] === '' && !result.textContent) {
        cells[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
            result.textContent = `${currentPlayer} wins!`;
            disableCells();
        } else if (cells.every(cell => cell !== '')) {
            result.textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            result.textContent = `Current Player: ${currentPlayer}`;
        }
    }
};

// Function to check for winning conditions
const checkWin = (player) => {
    for (const condition of winconditions) {
        const [a, b, c] = condition;
        if (cells[a] === player && cells[b] === player && cells[c] === player) {
            return true;
        }
    }
    return false;
};

// Function to disable all cells after a win or draw
const disableCells = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.pointerEvents = 'none');
};

// Function to reset the game
const resetGame = () => {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = '';
    const cellsElements = document.querySelectorAll('.cell');
    cellsElements.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
        cell.style.pointerEvents = 'auto';
    });
};

const winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
