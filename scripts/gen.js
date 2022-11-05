function addCard(appenElem, imgUrl) {
    var cardCode = `
    <div class="item-card">
        <img
            src="${imgUrl}"
            alt="item-thub"
            class="item-thumb"
        />
    </div>`;
    appenElem.innerHTML += cardCode;
}

function card(imgUrl) {
    var cardCode = `
    <div class="item-card">
        <img
            src="${imgUrl}"
            alt="item-thub"
            class="item-thumb loading"
        />
    </div>`;
    return cardCode;
}

function addCardGroup(title, innerCrads) {
    var code = `<div class="item-list">
    <div class="item-list-heading">
        <span>${title}</span>
    </div>
    <div class="item-card-box">
        ${innerCrads ? innerCrads : ""}
    </div>
    <div class="scroll-btn">
        <button class="scroll-btn-left">
            <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <button class="scroll-btn-right">
            <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
    </div>
</div>`;
    document.querySelector(".item-list-box").innerHTML += code;
}

// function setCardGroup(title, innerCrads) {
//     var code = `<div class="item-list">
//     <div class="item-list-heading">
//         <span>${title}</span>
//     </div>
//     <div class="item-card-box">
//         ${innerCrads ? innerCrads : ""}
//     </div>
//     <div class="scroll-btn">
//         <button class="scroll-btn-left">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//         </button>
//         <button class="scroll-btn-right">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//         </button>
//     </div>
// </div>`;
//     document.querySelector(".item-list-box").innerHTML += code;
// }

async function startHome() {
    var des = api.discover.replace("page=2", "page="+ Math.floor(Math.random() * 10));
    var res = await fetch(des);
    var json = await res.json();
    var results = await json.results;

    var cardCode = "";

    results.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[0].innerHTML = cardCode;
        log(card1)
    });

    var des = api.discover.replace("page=2", "page="+ Math.floor(Math.random() * 20));
    var res = await fetch(des);
    var json = await res.json();
    var results = await json.results;

    var cardCode = "";

    results.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[1].innerHTML = cardCode;
    });

    var des = api.discover.replace("page=2", "page="+ Math.floor(Math.random() * 30));
    var res = await fetch(des);
    var json = await res.json();
    var results = await json.results;

    var cardCode = "";

    results.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[2].innerHTML = cardCode;
    });

    log(json);
}

startHome();
