// ==UserScript==
// @name         CSDN优化
// @namespace    https://tampermonkey.net/
// @version      1.2
// @description  CSDN自动展开+页面优化
// @author       MXWXZ
// @match        *://blog.csdn.net/*
// @homepageURL  https://github.com/MXWXZ/Tampermonkey-Script/CSDN/
// @supportURL   https://github.com/MXWXZ/Tampermonkey-Script/issues/
// @downloadURL  https://raw.githubusercontent.com/MXWXZ/Tampermonkey-Script/master/CSDN/CSDN.user.js
// @updateURL    https://raw.githubusercontent.com/MXWXZ/Tampermonkey-Script/master/CSDN/CSDN.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("#btn-readmore").click();    // 自动展开
    $(".leftPop").remove();        // 缩放提示
    $("#csdn-toolbar").remove();   // 头部导航
    $("#btnMoreComment").click();  // 评论展开
    $(".recommend-box").before('<div style="margin-top: 8px;overflow: hidden;"/>');  // 视觉优化
})();