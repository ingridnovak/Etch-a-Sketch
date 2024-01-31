
document.getElementById('size-btn').addEventListener('click', chooseSize);


function chooseSize(){
let size = +prompt('Enter a size of grid^_^ (max is 100!!)');

generateDivs(size)
}






function hoverRow(){
  let rows = document.getElementsByClassName('row');
  let colorBtn = document.getElementById('color-btn');
  let blackBtn = document.getElementById('black-btn');
  let flag = false;
  let color = 'black';

  colorBtn.addEventListener('click', () => {
    flag = true;
  })

  blackBtn.addEventListener('click', () => {
    flag = false;
   
  })
 
  for(let row of rows){
  
    row.addEventListener('mouseover', () => {
      if(flag){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        color = "#" + randomColor;
      }else{
        color = 'black';
      }

      row.style.backgroundColor = color;
  
  })

  }



  
}


function clearRow(){
  let clear = document.getElementById('clear-btn');
  let rows = document.getElementsByClassName('row');
  clear.addEventListener('click', () => {
      for(let row of rows){
      row.style.backgroundColor = "transparent";
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
      row.style.border = "2px solid black";
      
      column.appendChild(row);
    }
    screen.appendChild(column);
  }

  clearRow()
  hoverRow()


}




generateDivs()