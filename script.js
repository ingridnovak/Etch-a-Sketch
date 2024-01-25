function createGrid(){
   
    generateDivs()





}

function generateDivs(num = 5){
    let root = document.querySelector('#root');
        for(let i = 0; i < num; i++){
           
            let div = document.createElement('div');
            div.classList.add('item');
            
            div.x = (i % 5) * 40;
            div.y = Math.floor(i / 5) * 40;
            root.append(div);
           
        }
}

createGrid()