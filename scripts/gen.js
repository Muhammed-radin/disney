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

    var rnd = Math.floor(Math.random() * 19);
    log(text);

    $(".main-thumb").src = api.imgApi + text.results[rnd].backdrop_path;
    $(".main-thumb-title").innerHTML = text.results[rnd].original_title
        ? text.results[rnd].original_title
        : text.results[rnd].name;
    $(".main-thumb-over").innerHTML = text.results[rnd].overview;
    $(
        ".rate-card-btn"
    ).innerHTML = `<ion-icon name="star"></ion-icon> ${text.results[
        rnd
    ].vote_average.toFixed(1)}`;

    var nowDt = new Date();
    var today =
        nowDt.getFullYear() +
        "-" +
        String(nowDt.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(nowDt.getDate()).padStart(2, "0");

    if (text.results[rnd].release_date < today) {
        $(
            ".upcoming-card-btn"
        ).innerHTML = `<ion-icon name="calendar"></ion-icon>
        ${text.results[rnd].release_date}`;
    } else {
        $(
            ".upcoming-card-btn"
        ).innerHTML = `<ion-icon name="arrow-up-outline"></ion-icon>
        Upcoming`;
    }

    setInterval(function () {
        var rnd = Math.floor(Math.random() * 19);
        $(".main-thumb").src = api.imgApi + text.results[rnd].backdrop_path;
        $(".main-thumb-title").innerHTML = text.results[rnd].original_title
            ? text.results[rnd].original_title
            : text.results[rnd].name;
        $(".main-thumb-over").innerHTML = text.results[rnd].overview;
        $(
            ".rate-card-btn"
        ).innerHTML = `<ion-icon name="star"></ion-icon> ${text.results[
            rnd
        ].vote_average.toFixed(1)}`;

        if (text.results[rnd].release_date < today) {
            $(
                ".upcoming-card-btn"
            ).innerHTML = `<ion-icon name="calendar"></ion-icon>
            ${text.results[rnd].release_date}`;
        } else {
            $(
                ".upcoming-card-btn"
            ).innerHTML = `<ion-icon name="arrow-up-outline"></ion-icon>
            Upcoming`;
        }
    }, 10000);

    ///////////////////////////////////////////////

    var des = api.now_play.replace(
        "page=2",
        "page=" + Math.floor(Math.random() * 10)
    );
    var res = await fetch(des);
    var json = await res.json();
    var results = await json.results;
    console.log(results);

    var cardCode = "";

    results.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[0].innerHTML = cardCode;
    });

    ////////////////////////////////////////////////////

    var des1 = api.discover.replace(
        "page=2",
        "page=" + Math.floor(Math.random() * 20)
    );

    var res1 = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=" +
            api.auth +
            "&page=1"
    );

    var json1 = await res1.json();
    var results1 = await json1.results;

    var cardCode = "";

    results1.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[1].innerHTML = cardCode;
    });

    ////////////////////////////////////////////////////

    var des2 = api.discover.replace(
        "page=2",
        "page=" + Math.floor(Math.random() * 30)
    );

    var res2 = await fetch(des);
    var json2 = await res2.json();
    var results2 = await json2.results;

    var cardCode = "";

    results2.forEach(function (card1, i) {
        cardCode += card(api.imgApi + card1.poster_path);

        $$(".item-card-box")[2].innerHTML = cardCode;
    });
}

startHome();
