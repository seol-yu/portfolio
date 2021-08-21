"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    // console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector(".category__btn.selected");
    active.classList.remove("selected");
    const target =
        e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    target.classList.add("selected");

    projectContainer.classList.add("anim-out");
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });

        // for(let project of projects) {

        // }

        // let project;
        // for(let i = 0; i < projects.length; i++) {
        //   project = projects[i];
        // }

        projectContainer.classList.remove("anim-out");
    }, 300);
});
