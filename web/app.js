const pageHome = document.querySelector('.main_container'),
    pageSpegniCentrale = document.querySelector('.off_container'),
    pageExit  = document.querySelector('.exit_container');

function home(){
    pageHome.classList.add('active');
    pageSpegniCentrale.classList.remove('active');
    pageExit.classList.remove('active');
}
function login(){
    console.log("login")
}
function spegniCentrale(){
    pageHome.classList.remove('active');
    pageSpegniCentrale.classList.add('active');
    pageExit.classList.remove('active');
}
function exit(){
    pageHome.classList.remove('active');
    pageSpegniCentrale.classList.remove('active');
    pageExit.classList.add('active');
}