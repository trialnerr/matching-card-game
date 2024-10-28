import { Queue } from "./queue.js";

const images = ['☎️', '🍎', '🇿🇼', '🥐', '🧲'];
const N = 10;
const clickedButtons = new Queue; 
let hidden = 0;

function shuffleNums() {
  const nums = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
  let shuffledNums = nums
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
  return shuffledNums; 
}

const currShuffle = shuffleNums();
console.log(currShuffle)

//if there is a match remove them from the dom
//if not do nothing (for now)
function checkEquality(a, b) {
  console.log(a, b);
  const aId = a.target.id; 
  const bId = b.target.id; 
  const match = currShuffle[aId] === currShuffle[bId];
  if (match) {
    a.target.classList.add('hidden'); 
    b.target.classList.add('hidden'); 
    hidden += 2; 
  }
  else {
    console.log('no match!')
  }
}

function checkAndResetClickedButtons() {
  //if the length of clickedButtons is 2, then check if the two elements on there are the same
  //if they are then hide those elements from the screen
  //if they are not do nothing
  //remove the elements from the clickedButtons queue
  if (clickedButtons.length === 2) {
    checkEquality(clickedButtons.queue[0], clickedButtons.queue[1]);
    clickedButtons.reset(); 
  }

}

function generateBoard() {
  const board = document.querySelector('.board');
  for (let i = 0; i < N; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    const img = document.createElement('div');
    img.setAttribute('id', i);
    img.textContent = images[currShuffle[i]];
    square.addEventListener('click', (e) => handleButtonClick(e));
    square.appendChild(img);
    board.appendChild(square); 
  }
}

function handleButtonClick(e) {
  const id = e.target.id; 
  clickedButtons.push(e); 
  console.log(clickedButtons);
  checkAndResetClickedButtons();
  console.log(hidden);
  if (hidden === N) {
    console.log('You matched them all!')
    document.querySelector('.hasWon').textContent = 'You matched them all!';
  }
  return e.target.id; 
}

function main() {
  generateBoard();
} 

window.onload = main; 