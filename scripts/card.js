$(".item-list-box").style.height = window.innerHeight - 100 + "px";

$$(".scroll-btn-left").forEach(function (v, i) {
    v.onclick = function () {
        v.parentElement.parentElement.querySelector(
            ".item-card-box"
        ).scrollLeft -= 200;
        card(
            v.parentElement.parentElement.querySelector(".item-card-box"),
            "https://image.tmdb.org/t/p/w500/8kSerJrhrJWKLk1LViesGcnrUPE.jpg"
        );
    };
});

$$(".scroll-btn-right").forEach(function (v, i) {
    v.onclick = function () {
        v.parentElement.parentElement.querySelector(
            ".item-card-box"
        ).scrollLeft += 200;
    };
});

$$(".loading").forEach(function (cards, i) {
    cards.onload = function () {
        cards.className = "item-card";
    };
});

$$(".item-card-box").forEach(function (box, i) {

    box.querySelectorAll(".item-card").forEach(function (card, i) {
        document.onload = function (e) {
            log(e);
        };
    });
});
