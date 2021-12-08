const card = document.querySelector(".card_body");
const primary = document.querySelector(".btn_prim");
const dark = document.querySelector(".btn_dark");
const danger = document.querySelector(".btn_dang");

const cardColor = () => {
    primary.addEventListener("click", () => {
        card.classList.toggle("prim-color")
    })
}

const cardDark = () => {
    dark.addEventListener("click", () => {
        card.classList.toggle("dark-color")
    })
}

const cardDAnger = () => {
    danger.addEventListener("click", () => {
        card.classList.toggle("danger-color")
    })
}


cardColor();
cardDark();
cardDAnger();