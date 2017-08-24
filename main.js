$(document).ready(function() {
    var xH
    $('.scroll').hover(
        function() {
            xH = $(this).children("img").css("height");
            xH = parseInt(xH);
            xH = xH - 390;
            xH = "-" + xH + "px";
            $(this).children("img").css("top", xH);
        },
        function() {
            $(this).children("img").css("top", "0px");
        });
});