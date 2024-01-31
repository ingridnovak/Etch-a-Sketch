
document.getElementById('size-btn').addEventListener('click', chooseSize);



function chooseSize(){
let size = +prompt('Enter a size of grid^_^ (max is 100!!)');

generateDivs(size)


}


function hoverRow(row){
  
  row.addEventListener('mouseover', () => {
    row.style.backgroundColor = 'black'
  })

  
  
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
      hoverRow(row)
      column.appendChild(row);
    }
    screen.appendChild(column);
  }

  clearRow()


}




generateDivs()