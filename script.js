/*==================================================
    A LITTLE UNIVERSE 💙
    SCRIPT.JS
    FINAL
==================================================*/

/*=============================
    ELEMENTS
=============================*/

const pages = document.querySelectorAll(".page");

const $ = id => document.getElementById(id);

const music = $("bgMusic");

/* Welcome */
const startBtn = $("startBtn");

/* Intro */
const introTyping = $("introTyping");
const introContinue = $("introContinue");

/* Feeling */
const goodBtn = $("goodBtn");
const badBtn = $("badBtn");

/* Reason */
const reasonInput = $("reasonInput");
const sendReasonBtn = $("sendReasonBtn");

/* Thanks */
const thanksTyping = $("thanksTyping");
const thanksContinue = $("thanksContinue");

/* Chocolate */
const chocolateYes = $("chocolateYes");
const chocolateNo = $("chocolateNo");
const chocolateResultText = $("chocolateResultText");
const chocolateContinue = $("chocolateContinue");

/*=============================
    PAGE SYSTEM
=============================*/

function showPage(pageId){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    $(pageId).classList.add("active");

}

/*=============================
    TYPEWRITER
=============================*/

function typeWriter(element,text,speed=35){

    return new Promise(resolve=>{

        element.textContent="";

        let i=0;

        const timer=setInterval(()=>{

            element.textContent+=text.charAt(i);

            i++;

            if(i>=text.length){

                clearInterval(timer);

                resolve();

            }

        },speed);

    });

}

/*=============================
    HELPERS
=============================*/

function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}

function playMusic(){

    if(!music) return;

    music.volume=.45;

    music.play().catch(()=>{});

}

console.log("Part 1 Loaded 💙");
/*==================================================
    SCRIPT.JS
    FINAL
    PART 2
==================================================*/

/*=============================
    START
=============================*/

startBtn.addEventListener("click", async ()=>{

    playMusic();

    showPage("introPage");

    introContinue.style.display="none";

    await typeWriter(

        introTyping,

        "I made this little universe just for you. I hope it makes you smile. 💙"

    );

    introContinue.style.display="inline-block";

});

/*=============================
    INTRO
=============================*/

introContinue.addEventListener("click",()=>{

    showPage("feelingPage");

});

/*=============================
    FEELING
=============================*/

goodBtn.addEventListener("click",()=>{

    showPage("chocolatePage");

});

badBtn.addEventListener("click",()=>{

    showPage("reasonPage");

});

/*=============================
    REASON
=============================*/

sendReasonBtn.addEventListener("click",async()=>{

    showPage("thanksPage");

    thanksContinue.style.display="none";

    let message;

    if(reasonInput.value.trim()===""){

        message=

        "Thank you for being here. I hope everything gets better soon. 💙";

    }else{

        message=

        "Thank you for telling me. I really hope this little universe made your day a little brighter. 💙";

    }

    await typeWriter(

        thanksTyping,

        message

    );

    thanksContinue.style.display="inline-block";

});

/*=============================
    THANKS
=============================*/

thanksContinue.addEventListener("click",()=>{

    showPage("chocolatePage");

});

/*=============================
    CHOCOLATE
=============================*/

function chocolateResult(text){

    chocolateResultText.textContent=text;

    showPage("chocolateResultPage");

}

chocolateYes.addEventListener("click",()=>{

    chocolateResult(

        "Yay! I like chocolate too! 🍫"

    );

});

chocolateNo.addEventListener("click",()=>{

    chocolateResult(

        "That's okay... more chocolate for me. 🤍"

    );

});

chocolateContinue.addEventListener("click",()=>{

    showPage("choicePage");

});

console.log("Part 2 Loaded 💙");
/*==================================================
    SCRIPT.JS
    FINAL
    PART 3
==================================================*/

/*=============================
    ELEMENTS
=============================*/

const boysBtn = $("boysBtn");
const girlsBtn = $("girlsBtn");

const choiceButtons = $("choiceButtons");
const lastChanceText = $("lastChanceText");

const onlyUsBtn = $("onlyUsBtn");

/*=============================
    GIRLS BUTTON
=============================*/

let escapeCount = 0;

function moveGirlsButton(){

    const area = choiceButtons.getBoundingClientRect();

    const x = Math.random() * (area.width - girlsBtn.offsetWidth);
    const y = Math.random() * 120;

    girlsBtn.style.position = "absolute";
    girlsBtn.style.left = x + "px";
    girlsBtn.style.top = y + "px";

}

function girlsEscape(){

    if(escapeCount >= 4) return;

    escapeCount++;

    moveGirlsButton();

    switch(escapeCount){

        case 1:

            lastChanceText.textContent =
            "Catch me if you can. 🤭";

        break;

        case 2:

            lastChanceText.textContent =
            "You're getting closer...";

        break;

        case 3:

            lastChanceText.textContent =
            "One last chance...";

        break;

        case 4:

            girlsBtn.style.opacity="0";
            girlsBtn.style.pointerEvents="none";

            setTimeout(showOnlyUs,500);

        break;

    }

}

/* Desktop */
girlsBtn.addEventListener("mouseenter",girlsEscape);

/* Mobile */
girlsBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    girlsEscape();

});

/*=============================
    ONLY US
=============================*/

function showOnlyUs(){

    showPage("onlyUsPage");

    onlyUsBtn.classList.remove("show");

    setTimeout(()=>{

        onlyUsBtn.classList.add("show");

    },250);

}

/* Boys */

boysBtn.addEventListener("click",()=>{

    showOnlyUs();

});

/*=============================
    HEART PAGE
=============================*/

onlyUsBtn.addEventListener("click",async()=>{

    showPage("heartPage");

    await typeWriter(

        $("heartTyping"),

        "I really hope this little universe made you smile.\n\nBecause... you already made mine. 💙",

        38

    );

    await wait(1200);

    showPage("questionPage");

    await typeWriter(

        $("questionTyping"),

        "Can I have a place in your heart? ❤️",

        42

    );

});

console.log("Part 3 Loaded 💙");
/*==================================================
    SCRIPT.JS
    FINAL
    PART 4
==================================================*/

/*=============================
    FINAL ELEMENTS
=============================*/

const yesHeartBtn = $("yesHeartBtn");
const noHeartBtn = $("noHeartBtn");

const endingTitle = $("endingTitle");
const endingMessage = $("endingMessage");

const stars = $("stars");
const shootingStars = $("shootingStars");
const hearts = $("hearts");
const confetti = $("confetti");

/*=============================
    ENDING
=============================*/

function openEnding(title,message){

    endingTitle.textContent=title;
    endingMessage.textContent=message;

    showPage("endingPage");

}

/*=============================
    YES
=============================*/

yesHeartBtn.addEventListener("click",()=>{

    launchConfetti();

    openEnding(

        "💙 Thank You",

        "Thank you for giving me a place in your heart.\n\nI'll always treasure this little universe. ❤️"

    );

});

/*=============================
    NO
=============================*/

noHeartBtn.addEventListener("click",()=>{

    openEnding(

        "🌙 That's Okay",

        "Thank you for visiting my little universe.\n\nI hope life always gives you a reason to smile. 💙"

    );

});

/*=============================
    STARS
=============================*/

function createStars(){

    for(let i=0;i<180;i++){

        const star=document.createElement("div");

        star.className="star";

        star.style.left=Math.random()*100+"vw";
        star.style.top=Math.random()*100+"vh";

        star.style.animationDelay=Math.random()*3+"s";

        stars.appendChild(star);

    }

}

/*=============================
    SHOOTING STAR
=============================*/

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shootingStar";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*30+"vh";

    shootingStars.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2200);

}

/*=============================
    HEARTS
=============================*/

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floatingHeart";

    heart.textContent="💙";

    heart.style.left=Math.random()*100+"vw";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,1800);

setInterval(createShootingStar,6000);

createStars();

console.log("Part 4 Loaded 💙");