function addCard(appenElem, imgUrl) {
    var cardCode = `
    <div class="item-card">
        <img
            src="${imgUrl}"
            alt="item-thub"
            class="item-thumb"
        />
    </div>`;
    console.log("lo");
    appenElem.innerHTML += cardCode;
}

function card(imgUrl) {
    var cardCode = `
    <div class="item-card">
        <img
            src="${imgUrl}"
            alt="item-thub"
            class="item-thumb"
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

var movieApiArr = [];

async function startHome() {
    var loadCount = 10;
    var nowCount = 0;

    var timer = setInterval(function () {
        nowCount += 1;
        var url =
            api.startApiUrl + Math.floor(Math.random() * 99999) + api.endApiUrl;
        movieApiArr.push(url);

        if (nowCount == loadCount) {
            clearInterval(timer);
            // console.log(movieApiArr);

            var Card = "";

            movieApiArr.forEach(function (url, index) {
                async function done() {
                    var res = await fetch(url);
                    var json = await res.json();
                    var img = api.imgApi + json.poster_path;
                    var code = card(img);
                    Card += code;
                    $(".item-card-box").innerHTML = Card;
                    return res
                }
                done()
            });
        }
    });
}

startHome();
