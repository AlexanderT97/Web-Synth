const cis = new Audio("/sounds/Cis.wav");
const dis = new Audio("/sounds/Dis.wav");
const fis = new Audio("/sounds/Fis.wav");
const gis = new Audio("/sounds/Gis.wav");
const ais = new Audio("/sounds/Ais.wav");
const c = new Audio("/sounds/C.wav");
const d = new Audio("/sounds/D.wav");
const e = new Audio("/sounds/E.wav");
const f = new Audio("/sounds/F.wav");
const g = new Audio("/sounds/G.wav");
const a = new Audio("/sounds/A.wav");
const b = new Audio("/sounds/B.wav");

let whiteshadowC = document.getElementById("whiteshadowC");
let whiteshadowD = document.getElementById("whiteshadowD");
let whiteshadowE = document.getElementById("whiteshadowE");
let whiteshadowF = document.getElementById("whiteshadowF");
let whiteshadowG = document.getElementById("whiteshadowG");
let whiteshadowA = document.getElementById("whiteshadowA");
let whiteshadowB = document.getElementById("whiteshadowB");

let blackshadowCis = document.getElementById("blackshadowCis");
let blackshadowDis = document.getElementById("blackshadowDis");
let blackshadowFis = document.getElementById("blackshadowFis");
let blackshadowGis = document.getElementById("blackshadowGis");
let blackshadowAis = document.getElementById("blackshadowAis");


document.addEventListener("keydown", function(info){
        if(info.code==="KeyW"){
            cis.currentTime=0;
            cis.play();
            blackshadowCis.style.boxShadow = "1px 1px 5px 5px #777777 inset";
        }
        if(info.code==="KeyE"){
            dis.currentTime=0;
            dis.play();
            blackshadowDis.style.boxShadow = "1px 1px 5px 5px #777777 inset";
        }
        if(info.code==="KeyT"){
            fis.currentTime=0;
            fis.play();
            blackshadowFis.style.boxShadow = "1px 1px 5px 5px #777777 inset";
        }
        if(info.code==="KeyY"){
            gis.currentTime=0;
            gis.play();
            blackshadowGis.style.boxShadow = "1px 1px 5px 5px #777777 inset";
        }
        if(info.code==="KeyU"){
            ais.currentTime=0;
            ais.play();
            blackshadowAis.style.boxShadow = "1px 1px 5px 5px #777777 inset";
        }
        if(info.code==="KeyA"){
            c.currentTime=0;
            c.play();
            whiteshadowC.style.boxShadow = "1px 1px 5px 5px #888888 inset";
        }
        if(info.code==="KeyS"){
            d.currentTime=0;
            d.play();
            whiteshadowD.style.boxShadow = "1px 1px 5px 5px #888888 inset";
        }
        if(info.code==="KeyD"){
            e.currentTime=0;
            e.play();
            whiteshadowE.style.boxShadow = "1px 1px 5px 5px #888888 inset";
        }
        if(info.code==="KeyF"){
            f.currentTime=0;
            f.play();
            whiteshadowF.style.boxShadow = "1px 1px 5px 5px #888888 inset";
        }
        if(info.code==="KeyG"){
            g.currentTime=0;
            g.play();
            whiteshadowG.style.boxShadow = "1px 1px 5px 5px #888888 inset";
        }
        if(info.code==="KeyH"){
            a.currentTime=0;
            a.play();
            whiteshadowA.style.boxShadow = "1px 1px 5px 5px #888888 inset";
        }
        if(info.code==="KeyJ"){
            b.currentTime=0;
            b.play();
            whiteshadowB.style.boxShadow = "1px 1px 5px 5px #888888 inset";
        }
    });

    document.addEventListener("keyup", function(del){
        if(del.code==="KeyW"){
            cis.currentTime=0;
            cis.pause();
            blackshadowCis.style.boxShadow = "none";
        }
        if(del.code==="KeyE"){
            dis.currentTime=0;
            dis.pause();
            blackshadowDis.style.boxShadow = "none";
        }
        if(del.code==="KeyT"){
            fis.currentTime=0;
            fis.pause();
            blackshadowFis.style.boxShadow = "none";
        }
        if(del.code==="KeyY"){
            gis.currentTime=0;
            gis.pause();
            blackshadowGis.style.boxShadow = "none";
        }
        if(del.code==="KeyU"){
            ais.currentTime=0;
            ais.pause();
            blackshadowAis.style.boxShadow = "none";
        }
        if(del.code==="KeyA"){
            c.currentTime=0;
            c.pause();
            whiteshadowC.style.boxShadow = "none";
        }
        if(del.code==="KeyS"){
            d.currentTime=0;
            d.pause();
            whiteshadowD.style.boxShadow = "none";
        }
        if(del.code==="KeyD"){
            e.currentTime=0;
            e.pause();
            whiteshadowE.style.boxShadow = "none";
        }
        if(del.code==="KeyF"){
            f.currentTime=0;
            f.pause();
            whiteshadowF.style.boxShadow = "none";
        }
        if(del.code==="KeyG"){
            g.currentTime=0;
            g.pause();
            whiteshadowG.style.boxShadow = "none";
        }
        if(del.code==="KeyH"){
            a.currentTime=0;
            a.pause();
            whiteshadowA.style.boxShadow = "none";
        }
        if(del.code==="KeyJ"){
            b.currentTime=0;
            b.pause();
            whiteshadowB.style.boxShadow = "none";
        }
    });



let easteregg = new Audio("sounds/Easter-Egg.mp3");

function eeplay(){
    easteregg.play();
}

let htmlnotes = '<img class="note">';
let animation;

function animate(){
    if(animation = document.getElementById("note-1")){
         animation.innerHTML = htmlnotes;
         animation.classList.add("music-animation");
    }
    if(animation = document.getElementById("note-2")){
        animation.innerHTML = htmlnotes;
        animation.classList.add("music-animation");
    }
    if(animation = document.getElementById("note-3")){
        animation.innerHTML = htmlnotes;
        animation.classList.add("music-animation");
    }
    if(animation = document.getElementById("note-4")){
        animation.innerHTML = htmlnotes;
        animation.classList.add("music-animation");
    } 
    if(animation = document.getElementById("note-5")){
        animation.innerHTML = htmlnotes;
        animation.classList.add("music-animation");
    }
    if(animation = document.getElementById("note-6")){
        animation.innerHTML = htmlnotes;
        animation.classList.add("music-animation");
    }
    if(animation = document.getElementById("note-7")){
        animation.innerHTML = htmlnotes;
        animation.classList.add("music-animation");
    }
    if(animation = document.getElementById("note-8")){
        animation.innerHTML = htmlnotes;
        animation.classList.add("music-animation");
    }
}


function eestop(){
    if(animation = document.getElementById("note-1")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
    if(animation = document.getElementById("note-2")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
    if(animation = document.getElementById("note-3")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
    if(animation = document.getElementById("note-4")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
    if(animation = document.getElementById("note-5")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
    if(animation = document.getElementById("note-6")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
    if(animation = document.getElementById("note-7")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
    if(animation = document.getElementById("note-8")){
        animation.innerHTML = htmlnotes;
        animation.classList.remove("music-animation");
    }
}

let timeOut = setTimeout(eestop, 67000);

document.getElementById("Easter_Egg").addEventListener("click", eeplay);
document.getElementById("Easter_Egg").addEventListener("click", eestop);
document.getElementById("Easter_Egg").addEventListener("click", animate);