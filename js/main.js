const btnActive = document.getElementById('btnToggle');
const menu = document.getElementById('active');

btnActive.addEventListener('click',()=>{
    menu.classList.toggle('active')
});


