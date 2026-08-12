// /js/section_fold.js
document.querySelectorAll(".section-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const willOpen = !content.classList.contains("is-open");

        if (willOpen) {
            document.querySelectorAll(".section-content.is-open").forEach(other => {
                if (other !== content) other.classList.remove("is-open");
            });
        }

        content.classList.toggle("is-open", willOpen);
    });
});