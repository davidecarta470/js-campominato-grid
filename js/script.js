const main = document.getElementById('main');
// const easyContainer = document.querySelector('.easy-container'); 
// const averageContainer = document.querySelector('.average-container');
// const crazyContainer = document.querySelector('.crazy-container');
const selectValue = document.getElementById('my-select');
const Container = document.createElement('div');
Container.className ='container';
// let listNumberEasy =  [];
// let listNumberAverage =  [];
// let listNumberCrazy =  [];


// Creo i tre Container con diverso numero di celle e diverse caratteristiche
// for(let i=0; i<100; i++){
//   let easySquare = document.createElement('div');
//   easySquare.className= 'square-easy';
//   easySquare.innerHTML = generateUniqueRandomInt(listNumberEasy,1,100);
//   easyContainer.append(easySquare);
// }

// for (let i=0 ; i<81 ; i++){
//   let averageSquare = document.createElement('div');
//   averageSquare.className ='square-average';
//   averageSquare.innerHTML = generateUniqueRandomInt(listNumberAverage,1,81);
//   averageContainer.append(averageSquare);
// }

// for (let i=0 ; i<49 ; i++){
//   let crazySquare = document.createElement('div');
//   crazySquare.className ='square-crazy';
//   crazySquare.innerHTML = generateUniqueRandomInt(listNumberCrazy,1,49);
//   crazyContainer.append(crazySquare);
// }

// Attivo Disattivo display
const play= document.getElementById('play');
play.addEventListener('click',function(){
  let n =0;
  let listNumber = [];
  if (selectValue.value ==='easy'){
    n = 100;
  }
  if (selectValue.value ==='average'){
    n = 81;
  }
  if (selectValue.value ==='crazy'){
    n =49;
  }
  //  let squareSize=  selectValue.value


  Container.innerHTML = '';
  main.append(Container)


  for (let i=0 ; i<n ; i++){
    let Square = document.createElement('div');
    Square.className ='square';
    Square.classList.add(selectValue.value)
    Square.innerHTML = generateUniqueRandomInt(listNumber, 1 , n);
    Container.append(Square);
  }
  
  //   crazyContainer.classList.remove('active')
  //   averageContainer.classList.remove('active')
  //   easyContainer.classList.remove('active')

  // if(selectValue.value ==='easy'){
    //   easyContainer.classList.add('active')
  // }
  
  // if(selectValue.value ==='average'){
  //   averageContainer.classList.add('active')
  // }
  
  // if(selectValue.value ==='crazy'){
    //   crazyContainer.classList.add('active')
    // }
    

});  
  
 function generateUniqueRandomInt(list, min, max){
  let number = null, valid = false;
  while(!valid){
      number = generateRandomInt(min,max);
      if(!list.includes(number)) {
          valid = true;
          list.push(number);
      }
  }
  return number;
}
function generateRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


