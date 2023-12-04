const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

const close = document.getElementById('close');

// when click hangburger icon 
if (bar){
  bar.addEventListener('click', () =>{
    nav.classList.add('active');
  })
}

// when click x cose icon 
if (close){
  close.addEventListener('click', () =>{
    nav.classList.remove('active');
  })
}