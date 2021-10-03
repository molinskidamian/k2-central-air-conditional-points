(function () {
    const addNewPoint = document.querySelector(
        ".central-points-wrapper .addNewPoint"
    );
    const card = document.querySelector(".card");
    const curtain = document.querySelector(".curtain");
    const close = document.querySelector(".card .fa-times");

    addNewPoint.addEventListener("click", () => {
        curtain.style.display = "block";
        card.style.display = "block";
    });

    close.addEventListener("click", () => {
        curtain.style.display = "none";
        card.style.display = "none";
    });
})();
