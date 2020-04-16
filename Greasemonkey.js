// ==UserScript==
// @name     Remove Waitr "Unavailable" Sections 
// @version  1
// @grant    none
// @include  http://waitrapp.com
// @include  http://waitrapp.com/*
// @include  https://waitrapp.com
// @include  https://waitrapp.com/*
// ==/UserScript==

setTimeout(() => {
    let removeUnavailableSections = () => [...document.querySelectorAll("section>div>div>a>div>h3[class*='ComingSoon']")].forEach(unavailable=>unavailable.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(unavailable.parentElement.parentElement.parentElement.parentElement.parentElement));

    setTimeout(() => {
        let seeMoreButt = [...document.getElementsByTagName('button')].filter(b => b.innerText === "See More Restaurants")[0];
        seeMoreButt.onclick = (e) => setTimeout(() => removeUnavailableSections(), 250);
    }, 3000);

    let navItems = document.querySelector("[class*='MainMenu']").firstElementChild;
    let blogButton = navItems.children[3];
    blogButton.firstElementChild.addEventListener("click", (e) => e.preventDefault());
    blogButton.firstElementChild.innerText = "Remove 'Coming Soon' Restaurants";
    blogButton.onclick = removeUnavailableSections;

    removeUnavailableSections();
}, 5000);
