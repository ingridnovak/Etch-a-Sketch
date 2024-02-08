
document.getElementById('size-btn').addEventListener('click', chooseSize);


function chooseSize(){

let size = +prompt('Enter a size of grid^_^ (max is 100!!)');
while(size === 0 || size >= 100){
  alert('Enter a number BETWEEN 0 and 100,pls')
   size = +prompt('Enter a size of grid^_^ (max is 100!!)');

}

if(isNaN(size)){
  alert('Not a number. Enter number, pls');
  
  generateDivs()
}else{
  generateDivs(size)

}
}


function hoverRow(){
  let rows = document.getElementsByClassName('row');
  let colorBtn = document.getElementById('color-btn');
  let blackBtn = document.getElementById('black-btn');
  let shadowBtn = document.getElementById('shadow-btn');
  let changeColor = false;
  let shadow = '';
  let color = 'black';
  // let opacity = 0.1;


  colorBtn.addEventListener('click', () => {
    changeColor = true;
    
  });

  blackBtn.addEventListener('click', () => {
    changeColor = false;
    
   
  });

  shadowBtn.addEventListener('click', (e) => {
   
    if(e.target.value=="ON"){
      e.target.value ="OFF"
      shadow=e.target.value;
       
    console.log(shadow)
    }else if(e.target.value=="OFF"){
      e.target.value = "ON"
  shadow=e.target.value;
    console.log(shadow)

}

  })
 
  for(let row of rows){

    // row.style.opacity = opacity.toString();
  
    row.addEventListener('mouseover', function rowEff(){
      if(changeColor){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        color = "#" + randomColor;
      }else{
        color = 'black';
      }
      row.style.backgroundColor = color;
      
      if(shadow === 'OFF'){
      
      let currentOpacity = Number(row.style.opacity);
      if(currentOpacity < 1){
         row.style.opacity = currentOpacity + 0.1;
      }else{
      row.style.opacity = (currentOpacity/10) + 0.1;
      console.log(row.style.opacity)
      return;
  }
}
  })
  }
}


function clearRow(){
  let clear = document.getElementById('clear-btn');
  let rows = document.getElementsByClassName('row');
  clear.addEventListener('click', () => {
      for(let row of rows){
      row.style.backgroundColor = "transparent";
      row.style.opacity = '1';
      }
  })
}


function generateDivs(size = 16){
    let screen = document.querySelector(".sketch-screen");
    screen.innerHTML = '';
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      
      column.appendChild(row);
    }
    screen.appendChild(column);
  }

  clearRow()
  hoverRow()


}




generateDivs()