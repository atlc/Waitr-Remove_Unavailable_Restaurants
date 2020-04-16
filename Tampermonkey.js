// ==UserScript==
// @name         Remove Waitr "Unavailable" Sections
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Give unavailable restaurants the boot. Makes Waitr a lot less annoying in relative food deserts.
// @author       https://github.com/atlc
// @match        http://waitrapp.com
// @match        http://waitrapp.com/*
// @match        https://waitrapp.com
// @match        https://waitrapp.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        let removeUnavailableSections = () => [...document.querySelectorAll("section>div>div>a>div>h3[class*='ComingSoon']")].forEach(unavailable=>unavailable.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(unavailable.parentElement.parentElement.parentElement.parentElement.parentElement));
        let seeMoreButt = [...document.getElementsByTagName('button')].filter(b => b.innerText === "See More Restaurants")[0];
        seeMoreButt.onclick = (e) => setTimeout(() => removeUnavailableSections(), 350);

        let navItems = document.querySelector("[class*='MainMenu']").firstElementChild;
        let blogButton = navItems.children[3];
        blogButton.firstElementChild.addEventListener("click", (e) => e.preventDefault());
        blogButton.firstElementChild.innerText = "Remove 'Coming Soon' Restaurants";
        blogButton.onclick = removeUnavailableSections;

        removeUnavailableSections();
    }, 5000);
})();
