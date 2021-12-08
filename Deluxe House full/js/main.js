const animAtsiya = () => {
    const buttunAnim = document.querySelector(".button_anim");
    const img = document.querySelector(".accordion_img_js");

    buttunAnim.addEventListener("click", () => {
        img.classList.toggle("icon-active")
    })
}


const animAtsiya2 = ()=>{
    const buttunAnim = document.querySelector(".button_anim_2");
    const img = document.querySelector(".accordion_img_js_2");

    buttunAnim.addEventListener("click", ()=> {
        img.classList.toggle("icon-active")
    })
}

const animAtsiya3 = ()=>{
    const buttunAnim = document.querySelector(".button_anim_3");
    const img = document.querySelector(".accordion_img_js_3");

    buttunAnim.addEventListener("click", ()=> {
        img.classList.toggle("icon-active")
    })
}

const animAtsiya4 = ()=>{
    const buttunAnim = document.querySelector(".button_anim_4");
    const img = document.querySelector(".accordion_img_js_4");

    buttunAnim.addEventListener("click", ()=> {
        img.classList.toggle("icon-active")
    })
}

animAtsiya();
animAtsiya2();
animAtsiya3();
animAtsiya4();

