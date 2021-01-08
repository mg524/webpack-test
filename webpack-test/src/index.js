import $ from "jquery"
import "./index.css"
$(function () {
    $("ul li:odd").css("background", "skyblue");
    $("ul li:even").css("background", "yellow");
})
