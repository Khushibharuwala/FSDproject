document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    header.style.opacity = "0";
    header.style.transform = "translateY(-50px)";

    setTimeout(function () {
        header.style.transition = "all 1s ease";
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }, 200);

    const sections = document.querySelectorAll("section");

    sections.forEach(function (section, index) {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";

        setTimeout(function () {
            section.style.transition = "all 0.8s ease";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 500 + (index * 300));
    });

    const button = document.getElementById("getStarted");

    button.addEventListener("click", function () {
        button.innerText = "Let's Start! 🚀";
        button.style.transform = "scale(1.2)";

        setTimeout(function () {
            button.style.transform = "scale(1)";
        }, 300);

        alert("Welcome to Skill Connect! 🎓");
    });

    const features = document.querySelectorAll("#features li");

    features.forEach(function (feature, index) {
        feature.style.opacity = "0";
        feature.style.transform = "translateX(-50px)";

        setTimeout(function () {
            feature.style.transition = "all 0.5s ease";
            feature.style.opacity = "1";
            feature.style.transform = "translateX(0)";
        }, 1200 + (index * 300));

        feature.addEventListener("mouseover", function () {
            feature.style.transform = "scale(1.08)";
        });

        feature.addEventListener("mouseout", function () {
            feature.style.transform = "scale(1)";
        });
    });

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            link.style.fontSize = "18px";
            link.style.transition = "0.3s";
        });

        link.addEventListener("mouseout", function () {
            link.style.fontSize = "16px";
        });
    });

});