function openMenu(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}
function closeMenu(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// typewriter effect

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "WRITER" 
];

let speed = 110;

const textElements = document.querySelector(".typewriter-text");

let textsIndex = 0;
let charcIndex = 0;

function typeWriter(){
    if(charcIndex < texts[textsIndex].length) {
        textElements.innerText += texts[textsIndex].charAt(charcIndex);
        charcIndex++;
        
        setTimeout(typeWriter, speed)
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerText = textElements.innerText.slice(0,-1);
        setTimeout(eraseText, 50);
    }
    else{
        textsIndex = (textsIndex + 1) %  texts.length;
        charcIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter();
