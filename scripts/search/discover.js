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

var cardCode = "";
var pageLimitNo = 0;

async function startDiscover(loadCount) {
    cardCode = "";
    pageLimitNo = 0;

    for (i = 0; i < loadCount; i++) {
        pageLimitNo += 1;
        var randomDiscover =
            "https://api.themoviedb.org/3/discover/movie?api_key=0a6b99f93997170e6d22040517a3231c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
            pageLimitNo +
            "&with_watch_monetization_types=flatrate";

        var res = await fetch(randomDiscover);
        var json = await res.json();
        var results = json.results;

        results.forEach(function (cardes, i) {
            cardCode += card(api.imgApi + cardes.poster_path);
            $(".discover-box").innerHTML = cardCode;
        });

        log(results);
    }
}

// startDiscover(2);

async function search(loadCount) {
    var cardCode = "";
    var pageLimitNo = 0;

    if (loadCount == undefined) {
        loadCount = 1;
    }

    for (i = 0; i < loadCount; i++) {
        pageLimitNo += 1;

        var randomDiscover =
            "https://api.themoviedb.org/3/search/movie?api_key=" +
            api.auth +
            "&language=en-US&query=" +
            document.getElementById("searchInput").value +
            "&page=" +
            pageLimitNo +
            "&sort_by=popularity.desc&include_adult=false";
        console.log(randomDiscover);

        var res = await fetch(randomDiscover);
        var json = await res.json();
        var results = json.results;

        results.forEach(function (cardes, i) {
            cardCode += card(api.imgApi + cardes.poster_path);
            $(".discover-box").innerHTML = cardCode;
        });

        log(results);
    }
}

document.getElementById("searchInput").onkeyup = (e) => {
    if (e.keyCode == 13) {
        window.location.search = document.getElementById("searchInput").value;
    }
};

function getName() {
    var hash = window.location.href.indexOf("?") + 1;
    str = "";

    for (i = hash; i < window.location.href.length; i++) {
        str += window.location.href[i];
    }

    if (hash == 0 || hash == -1) {
        str = undefined;
    }

    return str;
}

log(getName());

async function go(loadCount, val) {
    var cardCode = "";
    var pageLimitNo = 0;
    var str = "";

    if (loadCount == undefined) {
        loadCount = 1;
    }

    if (
        document.getElementById("searchInput").value == undefined ||
        document.getElementById("searchInput").value == null ||
        document.getElementById("searchInput").value == false
    ) {
        str = getName() ? getName() : startDiscover(2);
        document.getElementById("searchInput").value =
            typeof str == "string" ? str.replaceAll("%20", " ") : null;
    } else {
        str = document.getElementById("searchInput").value;
    }

    for (i = 0; i < loadCount; i++) {
        pageLimitNo += 1;

        var randomDiscover =
            "https://api.themoviedb.org/3/search/movie?api_key=" +
            api.auth +
            "&language=en-US&query=" +
            str +
            "&page=" +
            pageLimitNo +
            "&sort_by=popularity.desc&include_adult=false";
        console.log(randomDiscover);

        var res = await fetch(randomDiscover);
        var json = await res.json();
        var results = json.results;

        results.forEach(function (cardes, i) {
            cardCode += card(api.imgApi + cardes.poster_path);
            $(".discover-box").innerHTML = cardCode;

            $$(".item-thumb").forEach(function (img, index) {
                img.onerror = function () {
                    img.parentElement.style.display = "none";
                };
            });
        });

        log(results);
    }
}

setInterval(function () {
    if (
        $(".discover-box").innerHTML == false ||
        $(".discover-box").innerHTML == undefined ||
        $(".discover-box").innerHTML == null 
        // document.querySelector(".discover-box").querySelector(".item-card")
    ) {
        console.log("invaild search");
        // $(".discover-box").innerHTML = `<div class="center"><p>not found</p></div>`
    }
}, 200);

go();