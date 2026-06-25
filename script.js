/* ==========================
   PAGE NAVIGATION
========================== */

function nextPage(pageNumber) {

    document.querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");
            page.style.display = "none";

        });

    const target =
        document.getElementById(
            "page" + pageNumber
        );

    if (target) {

        target.classList.add("active");
        target.style.display = "flex";

        if (pageNumber === 12) {
            launchConfetti();
        }

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* ==========================
   RESTART STORY
========================== */

function restartStory() {

    document.querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");
            page.style.display = "none";

        });

    const firstPage =
        document.getElementById("page1");

    firstPage.classList.add("active");
    firstPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

/* ==========================
   STORY TYPING EFFECT
========================== */

const storyText =

    `26 June ko meri zindagi ko ek bahut pyari si behen mili thi. ❤️

Uska naam tha Annu Kumari. 🌸

Dheere dheere woh sirf meri favourite sister hi nahi bani...

Balki meri khushiyon, meri muskurahat aur meri zindagi ka ek bahut khaas hissa ban gayi. 💖

Aur aaj...

Ussi Peyri Sister ka birthday hai. 🎂✨

To chalo...

Is khaas din ko aur bhi khaas banate hain. 🌷`;

let index = 0;

function typeWriter() {

    const box =
        document.getElementById("typing-box");

    if (!box) return;

    if (index < storyText.length) {

        box.innerHTML +=
            storyText.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    }

}

window.onload = () => {

    setTimeout(typeWriter, 500);

};

/* ==========================
   SECRET LETTERS
========================== */

function openLetter(id) {

    const content =
        document.getElementById(
            "letterContent"
        );

    if (id === 1) {

        content.innerHTML =

            `😊 Jab tum khush ho...

        To us khushi ko hamesha sambhal kar rakhna.

        Tumhari muskurahat duniya ko aur sundar bana deti hai ❤️`;

    }

    if (id === 2) {

        content.innerHTML =

            `😔 Agar kabhi udaas ho...

        To yaad rakhna ki tum akeli nahi ho.

        Tumhara Amit Bhaiya hamesha tumhare saath hai ❤️`;

    }

    if (id === 3) {

        content.innerHTML =

            `❤️ Jab bhi mujhe miss karo...

        Bas yaad kar lena ki duniya ke kisi kone me tumhara ek bhai hai jo tumhari bahut parwah karta hai ❤️`;

    }

}


/* ==========================
   FLOATING HEARTS
========================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25)
        + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4)
        + "s";

    document.body.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 350);

/* ==========================
   CAKE CELEBRATION
========================== */

const cakeBtn =
    document.getElementById(
        "cutCakeBtn"
    );

if (cakeBtn) {

    cakeBtn.addEventListener(
        "click",

        () => {

            const cake =
                document.getElementById(
                    "cake"
                );

            cake.innerHTML = "🍰";

            cake.style.transform =
                "scale(1.2)";

            launchConfetti();

            setTimeout(() => {

                alert(
                    "🎂 Happy 15th Birthday Annu ❤️"
                );

                nextPage(5);

            }, 2500);

        });

}

/* ==========================
   CONFETTI
========================== */

function launchConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML = "🎉";

        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.fontSize =
            (15 + Math.random() * 20)
            + "px";

        confetti.style.zIndex =
            "9999";

        document.body.appendChild(
            confetti
        );

        const duration =
            3000 + Math.random() * 2000;

        confetti.animate(

            [
                {
                    transform:
                        "translateY(0)"
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)"
                }
            ],

            {
                duration: duration
            }

        );

        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}