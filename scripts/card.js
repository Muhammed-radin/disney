$(".item-list-box").style.height = window.innerHeight - 100 + "px";

$$(".scroll-btn-left").forEach(function (v, i) {
    v.onclick = function () {
        v.parentElement.parentElement.querySelector(
            ".item-card-box"
        ).scrollLeft -= 200;
        card(v.parentElement.parentElement.querySelector(".item-card-box"), 'https://image.tmdb.org/t/p/w500/8kSerJrhrJWKLk1LViesGcnrUPE.jpg');
    };
});

$$(".scroll-btn-right").forEach(function (v, i) {
    v.onclick = function () {
        v.parentElement.parentElement.querySelector(
            ".item-card-box"
        ).scrollLeft += 200;
    };
});

function card(appenElem, imgUrl) {
    var cardCode = `
    <div class="item-card">
        <img
            src="${imgUrl}"
            alt="item-thub"
            class="item-thumb"
        />
    </div>`;
    console.log('lo');
    appenElem.innerHTML += (cardCode);
}

function cardGroup(title){

}
