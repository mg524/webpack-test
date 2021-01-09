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
console.log(Test.info);
/**-----------------------------------------------------------------------------*/
// 使用webpack打包方法进行使用 vue 文件
//导入单页面组件的 vue 入口组件
import Vue from "vue"
import App from "./components/App.vue"

const vm = new Vue({
    el: "#app",
    render: h => h(App)
});