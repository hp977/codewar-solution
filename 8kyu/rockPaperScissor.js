// Question

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.


// My answer
function rps(p1, p2) {
    if (p1 === p2) {
      return `Draw!`;
    }
    if (p1 === 'rock' && p2 === 'scissors') {
      return `Player 1 won!`;
    } else if (p1 === 'paper' && p2 === 'rock') {
      return `Player 1 won!`;
    } else if (p1 === 'scissors' && p2 === 'paper') {
      return `Player 1 won!`;
    } else {
      return `Player 2 won!`;
    }
}

// Other answer

const rps = (p1, p2) => {
    if(p1 === p2) {
      return 'Draw!'
    }; 
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
  }