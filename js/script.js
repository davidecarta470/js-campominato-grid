const main = document.getElementById('main');
// const easycontainer = document.querySelector('.easy-container'); 
// const averagecontainer = document.querySelector('.average-container');
// const crazycontainer = document.querySelector('.crazy-container');
const selectValue = document.getElementById('my-select');
const container = document.createElement('div');
container.className ='container';
const NUMBER_OF_BOMB = 16;
// let listNumberEasy =  [];
// let listNumberAverage =  [];
// let listNumberCrazy =  [];


// Creo i tre container con diverso numero di celle e diverse caratteristiche
// for(let i=0; i<100; i++){
//   let easysquare = document.createElement('div');
//   easysquare.className= 'square-easy';
//   easysquare.innerHTML = generateUniqueRandomInt(listNumberEasy,1,100);
//   easycontainer.append(easysquare);
// }

// for (let i=0 ; i<81 ; i++){
//   let averagesquare = document.createElement('div');
//   averagesquare.className ='square-average';
//   averagesquare.innerHTML = generateUniqueRandomInt(listNumberAverage,1,81);
//   averagecontainer.append(averagesquare);
// }

// for (let i=0 ; i<49 ; i++){
//   let crazysquare = document.createElement('div');
//   crazysquare.className ='square-crazy';
//   crazysquare.innerHTML = generateUniqueRandomInt(listNumberCrazy,1,49);
//   crazycontainer.append(crazysquare);
// }

// Attivo Disattivo display

const play= document.getElementById('play');
play.addEventListener('click',function(){

    main.innerHTML  = '';
  
    let n = 0;
    

    if (selectValue.value ==='easy'){
      n = 100;
    }
    if (selectValue.value ==='average'){
      n = 81;
    }
    if (selectValue.value ==='crazy'){
      n = 49;
    }

    
   let arrayBombCell=[];
    for(let i=0;i<NUMBER_OF_BOMB; i++){
    arrayBombCell[i] = generateUniqueRandomInt(1, n);
  }

    

    container.innerHTML = '';
    main.append(container)
    
    let punteggio = 0;

    // let listNumber = []; è la variabile che raccoglie tutti i numeri unici che vengono formulati e verificati dalla funzione 

    // let punteggioMassimo=false; 
    let mineActive= false;

    for (let i=0 ; i<n ; i++){
      let square = document.createElement('div');
      square.className ='square';
      square.classList.add(selectValue.value);
      // ricordarsi di inserire listnumber come parametro della funzione ...fare lo stesso nel prototipo a fondo pagina
      square.innerHTML = generateUniqueRandomInt(1 , n);
      container.append(square);
      
      square.addEventListener('click',function(){
        if(mineActive === false){
       
          for(let i=0 ; i<16 ; i++ ){
            if(parseInt(square.textContent) === arrayBombCell[i]){
              mineActive=true;
            }
          }
          if (mineActive) {
            square.classList.add('square-choise-wrong');
            console.log('Hai perso');
            console.log('punteggio',(punteggio));
          }    
          square.classList.add('square-choise-right');
          punteggio +=1;

        }
        // if(punteggioMassimo===true)
      });  
    }

      
    //   crazycontainer.classList.remove('active')
    //   averagecontainer.classList.remove('active')
    //   easycontainer.classList.remove('active')
  
    // if(selectValue.value ==='easy'){
      //   easycontainer.classList.add('active')
    // }
    
    // if(selectValue.value ==='average'){
    //   averagecontainer.classList.add('active')
    // }
    
    // if(selectValue.value ==='crazy'){
      //   crazycontainer.classList.add('active')
      // }
});  
      

      

      
  
  

 

// manca list come parametro...quando lo si inserisce ricordarsi di togliere la variabile list che è stata dichiarato all'interno della funzione.

 function generateUniqueRandomInt( min, max){
  let number = null, valid = false, list = [];
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


