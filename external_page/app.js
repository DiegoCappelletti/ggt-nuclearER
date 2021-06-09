let game = true;

const startingMinute = 30;
let time = startingMinute*60*1000;

const container = document.querySelector('.container');
const videoContainer = document.querySelector('.video')
const countdownEl = document.querySelector('.countdown');
const video = document.getElementById('video')
const allarm = document.getElementById('allarme')
allarm.loop = true;

function updateCountdown(){
    if(game){
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
            game=false;
        }

        countdownEl.innerHTML = `${minutes<10? '0'+minutes: minutes}:${second<10? '0'+second: second}:${milli/10}`;
        time-=10; 
    }
}

setInterval(updateCountdown, 10)