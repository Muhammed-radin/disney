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

async function startDiscover() {
    var res = await fetch(api.discover);
    var json = await res.json();
    var results = json.results;
    var cardCode = "";

    results.forEach(function (cardes, i) {
        cardCode += card(api.imgApi + cardes.poster_path);
        $(".discover-box").innerHTML = cardCode;
    });
    log(results);
}

startDiscover();
