import $ from "jquery"
import "./css/index.css"
import "./css/test.less"
$(function () {
    $("ul li:odd").css("background", "skyblue");
    $("ul li:even").css("background", "yellow");
})
class Test {
    static info = 123;

}
console.log(1);
console.log(Test.info)