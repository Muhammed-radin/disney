var buttonCodeCount = 0;

$(".nav-btn").addEventListener("click", function () {
    buttonCodeCount++;
    if (buttonCodeCount == 1) {
        $(".nav-contents").className = "nav-contents __mobile";
        $(".nav-btn ion-icon").name = "close-outline";

        // $('.nav-btn ion-icon').animate([{
        //     transform: 'translate(-50%, -50%) rotate(0deg)'
        // },{
        //     transform: 'translate(-50%, -50%) rotate(90deg)'
        // }], {
        //     duration: 500,
        //     iterations: 1
        // })
    } else {
        buttonCodeCount = 0;
        $(".nav-contents").className = "nav-contents";
        $(".nav-btn ion-icon").name = "menu-outline";
    }
});

setInterval(function () {
    if (window.innerWidth > 650) {
        $(".nav-contents").className = "nav-contents";
    } else {
        if (buttonCodeCount == 1) {
            $(".nav-contents").className = "nav-contents __mobile";
            $(".nav-btn ion-icon").name = "close-outline";
        }
    }
}, 1000);
