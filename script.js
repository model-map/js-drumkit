window.addEventListener('keydown',function(e){
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.currentTime=0.01;
    audio.play();
});

const buttons=document.querySelectorAll('button');

buttons.forEach(buttonKey=>{
    buttonKey.addEventListener("click",()=>{
        const dataKeyCode=buttonKey.dataset['key'];
        const audio=document.querySelector(`audio[data-key="${dataKeyCode}"]`);
        audio.currentTime=0.01;
        audio.play();
    })
})