const gameBox = document.querySelectorAll(".game-box")
const announcement = document.querySelector(".announcement");
const resetButton = document.querySelector("button")

let currentPlayer = "X"

const myH2 = document.createElement("h2");

myH2.textContent = `Player ${currentPlayer}'s turn`
announcement.append(myH2);

let arr = []

arr.length = 9;
arr.fill(null)

let isGameDecided = false;

gameBox.forEach((box) => {
    box.addEventListener("click", function() {
        if (arr[box.id] == null && !isGameDecided) {
            box.textContent = currentPlayer;
            arr[box.id] = currentPlayer;
            checkWinner();
            if (!isGameDecided) {
                switchPlayer();
            }
        }
    })
})


// Switch Player
function switchPlayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else if (currentPlayer == "O") {
        currentPlayer = "X"
    }
    myH2.textContent = `Player ${currentPlayer}'s turn`;
}

// Check Winner
// Winner is decided in 3 conditions
// row wise => arr[0], arr[1], arr[2] || arr[3], arr[4], arr[5] || arr[6], arr[7], arr[8]
// column wise => arr[0], arr[3], arr[6] || arr[1], arr[4], arr[7] || arr[2], arr[5], arr[8]
// diagonal wise => arr[0], arr[4], arr[8] || arr[2], arr[4], arr[6]

// Condition for draw
// all boxes are filled
// none of the rows, columns or diagonals are winner

function checkWinner() {
    if ((arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])) {
            // Game Won
            myH2.textContent = `The winner is Player ${currentPlayer}!`;
            isGameDecided = true;
        } else if (arr.every(element => element != null)) {
            // Game drawn
            myH2.textContent = `The game is drawn!`;
            isGameDecided = true;
        }
}

// reset the game
resetButton.addEventListener("click", function() {
    arr.fill(null);
    gameBox.forEach((box) => {
        box.textContent = "";
    })
    currentPlayer = "X";
    myH2.textContent = `Player ${currentPlayer}'s turn`;
    isGameDecided = false;
})