$(".item-list-box").style.height = window.innerHeight - 75 + "px";

$$(".scroll-btn-left").forEach(function (v, i) {
    v.onclick = function () {
        v.parentElement.parentElement.querySelector(
            ".item-card-box"
        ).scrollLeft -= 100;
    };
});

$$(".scroll-btn-right").forEach(function (v, i) {
    v.onclick = function () {
        v.parentElement.parentElement.querySelector(
            ".item-card-box"
        ).scrollLeft += 100;
    };
});

// document.getElementById().onsc
