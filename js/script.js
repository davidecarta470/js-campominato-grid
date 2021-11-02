
//creare un quadratino di certe dimensioni dentro il container
//fare in modo che il quadratino cambi le sue dimensioni con altre gia definite in precedenza


const container = document.querySelector('.container');
for(let i=0 ; i<64; i++){
const square = document.createElement('div')
square.className='square';
container.append(square);
}