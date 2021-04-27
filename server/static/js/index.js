const pageHome = document.querySelector('.main_container'),
    pageSpegniCentrale = document.querySelector('.off_container'),
    pageExit  = document.querySelector('.exit_container'),
    pageLoginId  = document.querySelector('.loginID'),
    pageLoginPwd  = document.querySelector('.loginPWD'),
    commentoId  = document.querySelector('.comm_id'),
    commentoPwd  = document.querySelector('.comm_pwd'),
    labelId  = document.getElementById("inputId"),
    labelPwd  = document.getElementById("inputPwd");

function home(){ //visualizza il menù principale con i bottoni
    pageHome.classList.add('active');
    pageSpegniCentrale.classList.remove('active');
    pageExit.classList.remove('active');
    pageLoginId.classList.remove('active');
    pageLoginPwd.classList.remove('active');
    commentoId.innerHTML = ""
    commentoPwd.innerHTML = ""
    labelId.value = ""
    labelPwd.value = ""
}
function spegniCentrale(){ //visualizza la scritta dopo aver premuto il pulsante spegni centrale
    pageHome.classList.remove('active');
    pageSpegniCentrale.classList.add('active');
    pageExit.classList.remove('active');
    pageLoginId.classList.remove('active');
    pageLoginPwd.classList.remove('active');
}
function exit(){ //visualizza la scritta dopo aver premuto il pulsante exit
    pageHome.classList.remove('active');
    pageSpegniCentrale.classList.remove('active');
    pageExit.classList.add('active');
    pageLoginId.classList.remove('active');
    pageLoginPwd.classList.remove('active');
}
function login(){ //visualizza il form per inserire l'ID
    pageHome.classList.remove('active');
    pageSpegniCentrale.classList.remove('active');
    pageExit.classList.remove('active');
    pageLoginId.classList.add('active');
    pageLoginPwd.classList.remove('active');
    commentoId.innerHTML = ""
    commentoPwd.innerHTML = ""
    labelId.value = ""
    labelPwd.value = ""
}
function password(){ //visualizza il form per inserire la password
    pageHome.classList.remove('active');
    pageSpegniCentrale.classList.remove('active');
    pageExit.classList.remove('active');
    pageLoginId.classList.remove('active');
    pageLoginPwd.classList.add('active');
    commentoId.innerHTML = ""
    commentoPwd.innerHTML = ""
    labelId.value = ""
    labelPwd.value = ""
}


const russa = "<div class='russo'>Президент не нанимал вас на эту работу, спецназовец Романов. Возвращайтесь, чтобы украсть ценную информацию у грязных капиталистов, которые угрожают нашей стране. Слава Арстотцке!</div><div>Il Presidente non ti ha incaricata per questo lavoro, soldato speciale Romanov. Torna a sottrare preziose informazioni ai sporchi capitalisti che minacciano il nostro paese. Gloria ad Arstotzka!</div>",
    ita = "",
    homer = "Homer, quante volte bisogna dirtelo che non puoi accedere al sistema? Di sicuro non dopo che hai rovescito il caffè mentre inzuppavi una ciambella mandando in corto il qudro elettrico e rischiando di provocare un disaastro nucleare!!! Torna a non fare le tua mansioni.";

function checkID(){ //controla se l'ID inserito è giusto e passa alla password, altrimenti visualizza un commento
    var id = labelId.value
    console.log(id)
    switch(id){
        case "524810":
            commentoId.innerHTML = russa
            break;
        case "123456":
            commentoId.innerHTML = ita
            break;
        case "MITICO":
        case "mitico":
        case "Mitico":
            commentoId.innerHTML = homer
            break;
        case "734256":
            password();
            break;
        default:
            commentoId.innerHTML = "ID errato"
            break;
    }
}
function checkPassword(){ //controla se la password inserita è giusta e accede al sistema principale
    var pwd = labelPwd.value
    console.log(pwd)
    switch(pwd){
        case "coHw&4oM":
            window.location.href = "./main.html"
            break;
        default:
            commentoPwd.innerHTML = "Password errata"
            break;
    }
}