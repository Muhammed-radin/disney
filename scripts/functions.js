function $(q) {
    return document.querySelector(q);
}

function $$(q) {
    return document.querySelectorAll(q);
}

function log(msg) {
    console.log(msg);
}

var ___CallCode090 = 0;

function oneTime(callback) {
    ___CallCode090 += 1;
    if (___CallCode090 == 1) {
        if (callback instanceof Function){
            callback()
        } else {
            eval(callback)
        }
    }
}

function calcplus(i, plus){
    return i + plus;
}

function goPage(href){
    window.location.href = href
}

async function go() {
    // var url = await fetch(
    //     "https://api.themoviedb.org/3/trending/all/day?api_key=" +
    //         api.auth +
    //         "&page=" +
    //         Math.floor(Math.random() * 10),
    //     {
    //         headers: {
    //             Authorization:
    //                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTZiOTlmOTM5OTcxNzBlNmQyMjA0MDUxN2EzMjMxYyIsInN1YiI6IjYzNjUxNjkwMGQyZjUzMDA5MTk5MmUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7RhXL9HLalF6fRl8l3ZmiaCxjcE4gpcvBG7D_qVk_hw",
    //         },
    //     }
    // );
    // var text = await url.json();
    // console.log(text);
    // setInterval(function () {
    //     var rnd = Math.floor(Math.random() * 19);
    //     $(".main-thumb").src = api.imgApi + text.results[rnd].backdrop_path;
    //     $(".main-thumb-title").innerHTML = text.results[rnd].original_title
    //         ? text.results[rnd].original_title
    //         : "NO_TITLE_FOUND";
    //     $(".main-thumb-over").innerHTML = text.results[rnd].overview;
    // }, 3000);
}

go();

// "https://api.themoviedb.org/3/discover/movie?api_key=0a6b99f93997170e6d22040517a3231c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",

