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
    var url = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=" +
            api.auth +
            "&page=" +
            Math.floor(Math.random() * 10),
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTZiOTlmOTM5OTcxNzBlNmQyMjA0MDUxN2EzMjMxYyIsInN1YiI6IjYzNjUxNjkwMGQyZjUzMDA5MTk5MmUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7RhXL9HLalF6fRl8l3ZmiaCxjcE4gpcvBG7D_qVk_hw",
            },
        }
    );
    var text = await url.json();

    setInterval(function () {
        var rnd = Math.floor(Math.random() * 19);
        $(".main-thumb").src = api.imgApi + text.results[rnd].backdrop_path;
        $(".main-thumb-title").innerHTML = text.results[rnd].original_title
            ? text.results[rnd].original_title
            : "NO_TITLE_FOUND";
        $(".main-thumb-over").innerHTML = text.results[rnd].overview;
    }, 3000);

    ///////////////////////////////////////////////

    var des = api.discover.replace(
        "page=2",
        "page=" + Math.floor(Math.random() * 10)
    );
    var res = await fetch(des);
    var json = await res.json();
    var results = await json.results;

    var cardCode = "";

    results.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[0].innerHTML = cardCode;
    });

    ////////////////////////////////////////////////////

    var des = api.discover.replace(
        "page=2",
        "page=" + Math.floor(Math.random() * 20)
    );

    var res = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=" + api.auth + '&page=1'
    );

    var json = await res.json();
    var results = await json.results;

    var cardCode = "";

    results.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[1].innerHTML = cardCode;
    });

    ////////////////////////////////////////////////////

    var des = api.discover.replace(
        "page=2",
        "page=" + Math.floor(Math.random() * 30)
    );

    var res = await fetch(des);
    var json = await res.json();
    var results = await json.results;
    console.log(json);

    var cardCode = "";

    results.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[2].innerHTML = cardCode;
    });
}

startHome();
