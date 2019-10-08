let count = 0;
const element = document.getElementById("counter");
const game = document.getElementById("game")

function increase(){
    count++;
    element.innerText = count;
    game.innerText = letterB;
}

window.addEventListener("keypress", function(keyPressEvent) {
    const tone = document.querySelector(`audio[data-key="${keyPressEvent.keyCode}"]`);
    if (!tone) return;
    const pianoKey = document.querySelector(`.pianoKey[data-key="${keyPressEvent.keyCode}"]`);
    tone.currentTime = 0;
    pianoKey.classList.add("pressed");
    tone.play();
    setTimeout(function() {
    pianoKey.classList.remove("pressed");
    game.innerText = "B";
    }, 300);
});

function pressKey (){
    const game = document.querySelector("game")
    game.append.innerText = "test";
}