const buttons = document.querySelectorAll('.button');
const pages = document.querySelectorAll('.default-page');

const audio80s = document.getElementById('audio80s');
const audio90s = document.getElementById('audio90s');
const audio00s = document.getElementById('audio00s');
const staticSound = document.getElementById('staticSound');
const audios = [audio80s, audio90s, audio00s];

function stopAllAudios() {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; 
    });
};
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            pages.forEach(page => {
                page.style.display = 'none';
            });
            stopAllAudios();
            const targetPage = document.querySelector('.page0');
            if (targetPage) {
                targetPage.style.display = 'block';
            }
            return;
        }
        const flicker = document.getElementById('flicker');
        flicker.style.display = 'block';
        pages.forEach(page => {
            page.style.display = 'none';
        });
        stopAllAudios();
        staticSound.currentTime = 0;
        staticSound.play();
        setTimeout(() =>{
            const targetPage = document.querySelector(`.page${index}`);
            if (targetPage) {
                targetPage.style.display = 'flex'; // ili 'block', kako ti odgovara
            }
            if(index===1){
                audio80s.play();
            }else if(index===2){
                audio90s.play();
            }else if(index===3){
                audio00s.play();
            }
            flicker.style.display = 'none';
            staticSound.pause(); 
        },1500);
    });
});

