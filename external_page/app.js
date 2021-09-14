let gioco

const url = 'http://localhost:5555/api/v1/gioco'
game = function(){
    fetch(url,{
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
        gioco = data.gioco
    })
};

const startingMinute = 30;
let time = startingMinute*60*1000;

const container = document.querySelector('.container');
const videoContainer = document.querySelector('.video')
const countdownEl = document.querySelector('.countdown');
const video = document.getElementById('video')
const allarm = new Audio('./allarme.mp3')
allarm.loop = true;

function updateCountdown(){
    game()
    if(gioco){
        let minutes = Math.floor((time/1000/60)%60);
        let second = Math.floor((time/1000)%60);
        let milli = time%1000;

        if(minutes<5){
            allarm.play();
        }
        if(time<0){
            container.classList.add('hidden');
            videoContainer.classList.remove('hidden');
            allarm.pause();
            video.play();
        }

        countdownEl.innerHTML = `${minutes<10? '0'+minutes: minutes}:${second<10? '0'+second: second}:${milli/10}`;
        time-=10; 
    }
}

setInterval(updateCountdown, 10)