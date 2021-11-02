

let numberOfSquare = 0;
const selectValue = document.getElementById('my-select');
console.log(selectValue.value)

const play= document.getElementById('play');

play.addEventListener('click',function(){
  switch (selectValue.value){
    case 'easy':
      numberOfSquare=100;
      break;
    case 'average':
      numberOfSquare=64;
      break;
    case 'crazy':
      numberOfSquare=36;
      break;
    default:
     console.log(`Sorry, we are out of`);
  }

  console.log(numberOfSquare)
});


const container = document.querySelector('.container');
for(let i=0 ; i<numberOfSquare; i++){
const square = document.createElement('div')
square.className='square';
container.append(square);
}