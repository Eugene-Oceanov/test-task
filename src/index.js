import "./css/index.scss";
import "./assets/img/logo.svg";
import "./assets/img/bg-left.svg";
import "./assets/img/bg-right.svg";
import "./assets/img/bg-bt.svg";

const valuteIconsArr = document.querySelectorAll(".card-item-terms-price__valute-logo"),
    sumArr = document.querySelectorAll(".card-item-terms-price__sum"),
    periodArr = document.querySelectorAll(".card-item-terms-price__period"),
    overlay = document.querySelector(".overlay"),
    openBurgerBtn = document.querySelector(".open-burger-btn"),
    burgerMenu = document.querySelector(".burger-menu");
let currentPeriod = "month",
    currentValute = "usd";

window.onload = () => {
    setTimeout(() => sumArr.forEach(item => { item.style.filter = "blur(0)" }), 300)
}

openBurgerBtn.addEventListener("click", () => {
    openBurgerBtn.classList.toggle("close-burger-btn");
    burgerMenu.classList.toggle("burger-menu--visible");
    overlay.classList.toggle("d-block");
    setTimeout(() => overlay.classList.toggle("overlay--visible"), 0);
})

overlay.addEventListener("click", () => {
    openBurgerBtn.classList.toggle("close-burger-btn");
    burgerMenu.classList.toggle("burger-menu--visible");
    overlay.classList.toggle("d-block");
    setTimeout(() => overlay.classList.toggle("overlay--visible"), 0);
});

periodArr.forEach(periodItem => {
    periodItem.addEventListener("click", () => {
        if (currentPeriod === "month") {
            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent / 30));
            periodArr.forEach(item => item.textContent = "/Day");
            currentPeriod = "day";
        } else if (currentPeriod === "day") {
            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 30));
            periodArr.forEach(item => item.textContent = "/Month");
            currentPeriod = "month";
        }
    })
})

valuteIconsArr.forEach(valuteItem => {
    valuteItem.addEventListener("click", () => {
        if (currentValute === "usd") {
            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 0.9219));
            valuteIconsArr.forEach(item => item.textContent = "\u20AC");
            currentValute = "eur";
        } else if (currentValute === "eur") {
            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 97.0945));
            valuteIconsArr.forEach(item => item.textContent = "\u20BD");
            currentValute = "rub";
        }
        else if (currentValute === "rub") {
            sumArr.forEach(sumItem => sumItem.textContent = Math.round(+sumItem.textContent * 0.0112));
            valuteIconsArr.forEach(item => item.textContent = "\u0024");
            currentValute = "usd";
        }
    })
})