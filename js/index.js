console.log("Your index.js is loaded correctly!");

$(document).ready(function() {
    $(".link").hover(function() {
        $(this).css("opacity", "1")
    }, function() {
        $(this).css("opacity", "0.5")
    })
})