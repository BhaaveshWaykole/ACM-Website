document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", function () {
        let sectionId = this.innerHTML.toLowerCase();
        document.querySelector(`#${sectionId}`).scrollIntoView({
            behavior: "smooth"
        });
    });
})
