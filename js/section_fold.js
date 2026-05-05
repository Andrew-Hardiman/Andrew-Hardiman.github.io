// /js/section_fold.js
document.querySelectorAll(".section-header").forEach(header => {
    header.addEventListener("click", () => {
        let content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
