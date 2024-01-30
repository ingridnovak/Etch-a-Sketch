
let flag = false;



function chooseSize(){
  
document.getElementById('size-btn').addEventListener('click', () => {

    let size = +prompt('Enter a size of grid^_^ (max is 100!!)');
    console.log(size)
    generateDivs(size)
    
})
}
   




function generateDivs(size){
    flag = true;
    let screen = document.querySelector(".sketch-screen");
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

}


chooseSize()