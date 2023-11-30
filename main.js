

const keys = document.querySelectorAll(".key");
note = document.querySelectorAll(".pad");
hints = document.querySelectorAll(".sound");
console.log(keys, note, hints);


function playNote(e) {
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key= document.querySelector(`.key[data-key="${e.keyCode}"]`);
console.log(audio,key);


if (!key) return;

const keyNote= key.getAttribute("kbd");

key.classList.add("playing");
note.innerHTML = keyNote;
audio.curentTime= 0;
audio.play();

}

function removeTransition(e) {
   if (e.propertyName !== "transform") return;
   this.classList.remove("playing");
}

function hintsOn(e, index) {
    e.setAttribute("style", "transition-delay:" + index + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);
