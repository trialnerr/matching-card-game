const images = ['☎️', '🍎', '🇿🇼', '🥐', '🧲'];
const N = 10;
const imageObj = {};


function shuffleNums() {
  const nums = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
  let shuffledNums = nums
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
  return shuffledNums; 
}

const currShuffle = shuffleNums();

function checkEquality(a, b) {
  return (currShuffle[a] === currShuffle[b])
}

console.log(checkEquality(2, 4)); 

function generateBoard() {
  const board = document.querySelector('.board');
  for (let i = 0; i < N; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.setAttribute('id', i);
    square.textContent = images[currShuffle[i]];
    square.addEventListener('click', () => {});
    board.appendChild(square); 
  }
}

function main() {
  generateBoard();
} 

window.onload = main; 