import $ from "jquery"

$(function () {
    $("ul li:odd").css("background", "skyblue");
    $("ul li:even").css("background", "yellow");
})
