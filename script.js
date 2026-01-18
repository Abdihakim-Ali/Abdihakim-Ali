// Tabs
function opentab(tabName) {
    var i, tabcontents, tablinks;

    tabcontents = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

// Mobile menu
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-400px";
}

// Scroll dots
const sections = document.querySelectorAll("section, #header");
const dots = document.querySelectorAll(".scroll-dots .dot");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
        if (dot.getAttribute("href") === "#" + current) {
            dot.classList.add("active");
        }
    });
});
