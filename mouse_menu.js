// Disable mouse on mobile devices

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


// Parallax menu
const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-items"))
  .forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
  });

// ==============================================================

// Mouse Cursor
let trailerIsAllowed = "trailer";
if (isMobileDevice()) {
    trailerIsAllowed = "NotAllowed"
    console.log(trailerIsAllowed);
}

const trailer = document.getElementById(trailerIsAllowed);

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
        
        const keyframes = {
            transform:`translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
            }

            trailer.animate(keyframes, {
                duration: 800,
                fill: "forwards"
            });
}

const getTrailerClass = type => {
    switch(type) {
        case "cardLink":
            return "cardLinkIsTrue";
        case "menuLink":
            return "menuLinkIsTrue";
        case "hyperlink":
            return "hyperlinkIsTrue";
        case "emailLink":
            return "emailLinkIsTrue";
        case "downloadLink":
            return "downloadLinkIsTrue";
        case "filterLink":
            return "filterLinkIsTrue";
        default:
            return "other"; 
    }
}

window.onmousemove = e => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

    const icon = document.getElementById("trailer-icon");

    animateTrailer(e, interacting);
    

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if (interacting) {
        const trailerIcon = document.getElementById("trailer-icon")
        icon.className = getTrailerClass(interactable.dataset.type)
        if (icon.className === "cardLinkIsTrue") {
            trailerIcon.innerHTML = `<ion-icon name="arrow-redo"></ion-icon>`;
        }
        else if (icon.className === "menuLinkIsTrue") {
            trailerIcon.innerHTML = `<ion-icon name="chevron-forward-outline"></ion-icon>`;
        }
        else if (icon.className === "hyperlinkIsTrue") {
            trailerIcon.innerHTML = `<ion-icon name="link-outline"></ion-icon>`;
        }
        else if (icon.className === "emailLinkIsTrue") {
            trailerIcon.innerHTML = `<ion-icon name="mail-outline"></ion-icon>`;
        }
        else if (icon.className === "downloadLinkIsTrue") {
            trailerIcon.innerHTML = `<ion-icon name="download-outline"></ion-icon>`;
        }
        else if (icon.className === "filterLinkIsTrue") {
            trailerIcon.innerHTML = `<ion-icon name="filter-outline"></ion-icon>`;
        }
        else
        trailerIcon.innerHTML = `<ion-icon name="filter-outline"></ion-icon>`;
        
    }
}

// ==============================================================