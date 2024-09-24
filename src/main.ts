import './style.css'


const jegyek: number[] = [];  

document.addEventListener('DOMContentLoaded',()=>{
  let inputElement = document.getElementById("bemenetiSzam") as HTMLInputElement;
  const kereso = document.getElementById("kereso");
  const hozzaad= document.getElementById("add");

  document.getElementById("add")!.addEventListener('click',() => {
    const jegyErtek = parseInt(inputElement.value);
    jegyek.push(jegyErtek);
    console.log(jegyek);
    
  })
})


