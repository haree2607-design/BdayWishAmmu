function showWish() {

    var message = document.getElementById("message");

    message.innerHTML = "🎂Happiest Birthday Monisha May God bless you with lots of happiness and prosperity 💕. Your always the best 😍. I am extremely sorry for what I have done. Please forgive me.. I want you to be with me for life Long. U will be always special for me no matter what.. I cannot replace you. The way u cared me thought me helped me each n every time. I am always thankful for it. Once Again happiest Birthday 🎊💕🎂 Ammu 🎉";
    message.style.opacity = "3";
    
}

function showGallery() {
    var gallery = document.getElementById("gallery");
gallery.style.backgroundColor = "lightcyan";
    if (gallery.style.display === "block") {
        gallery.style.display = "none";
    } else {
        gallery.style.display = "block";
    }
}


// function showSorry() {

//     var message = document.getElementById("sorryMessage");

//     message.innerHTML = ` Monisha 
//     I am really sorry sorry sorry for hurting you and breaking your trust 💔

//     Your very much special to me, and I never wanted to make you sad or to hate me. 

//     I made a bigger mistakes, but my care for you was and is always real. 💖

//     I regret every word and everything that caused you pain that caused you feel worst 😔

//     Please forgive me if possible and give me one chance to make things better please. 🌷

//     You mean everything to me till date no matter what. ✨

//     I never wanted to repeat the same things of creating problem in ur house but in that moment I could'nt control my emotions I am Sorry. ❤️

//     You are an amazing person, and you deserve kindness, respect, and happiness always. 

//     No matter what happens, I will always wish the best for you from my heart and always pray for you. 💕

//     Once again, I am truly sorry sorry sorry sorry sorry sorry sorry.🙏
//     `;

//     // Optional fade effect
//     message.style.opacity = "1";
//     message.style.fontWeight = "900";
//     message.style.fontSize = "larger";
//     message.style.color = "darkmagenta"
// }


function createConfetti() {

    setInterval(() => {

        let confetti = document.createElement("div");
        confetti.className = "confetti";

        // random position
        confetti.style.left = Math.random() * 100 + "vw";

        // random color
        confetti.style.backgroundColor =
            ["red", "blue", "yellow", "green", "purple","pink","orange"][Math.floor(Math.random() * 5)];

        // random size
        confetti.style.width = Math.random() * 8 + 5 + "px";
        confetti.style.height = confetti.style.width;

        document.body.appendChild(confetti);

        // remove after falling
        setTimeout(() => {
            confetti.remove();
        }, 5000);

    }, 200); // keeps generating continuously
}

window.onload = function() {
    setTimeout(() => {
        createConfetti();
    }, 1000); // starts after 1 second
};