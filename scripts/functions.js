function $(q) {
    return document.querySelector(q);
}

function $$(q) {
    return document.querySelectorAll(q);
}

function log(msg) {
    console.log(msg);
}

// async function go() {
//     var url = await fetch(
//         "https://api.themoviedb.org/3/discover/movie?api_key=0a6b99f93997170e6d22040517a3231c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate",
//         {
//             headers: {
//                 Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTZiOTlmOTM5OTcxNzBlNmQyMjA0MDUxN2EzMjMxYyIsInN1YiI6IjYzNjUxNjkwMGQyZjUzMDA5MTk5MmUzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7RhXL9HLalF6fRl8l3ZmiaCxjcE4gpcvBG7D_qVk_hw",
//             },
//         }
//     );
//     var text = await url.json();
//     console.log(text);
// }

// go();
