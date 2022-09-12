let menu = document.querySelector('.burger');
let menu_deux = document.querySelector('.close');
let open_menu = document.querySelector('.menu_two');

menu.addEventListener('click', function () {
    open_menu.style.display = 'block';
    menu.style.backgroundColor = "white";
})


menu_deux.addEventListener('click', function () {
    open_menu.style.display = 'none';
    menu.style.backgroundColor = "aqua";
})
