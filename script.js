let btn = document.querySelector('#toggleBtn');
let popUpBox = document.querySelector('#popUpBox');
let toggler = true;

btn.addEventListener('click', (e) => {
    if(toggler){
        popUpBox.style.display = 'none';
        toggler = false;
    }else{
        popUpBox.style.display = 'block';
        toggler = true;
    }
})