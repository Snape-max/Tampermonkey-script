// ==UserScript==
// @name         simple daily zhihu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       snape-max
// @match        https://daily.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    if($("div.header.navbar-fixed-top").length>0)
    {
        $("div.header.navbar-fixed-top").remove();
    }
    if($("div.download").length>0)
    {
        $("div.download").remove();
    }
    if($("div.footer").length>0)
    {
        $("div.footer").remove();
    }
    if($("a.read-more").length>0)
    {
        $("a.read-more").remove();
    }
    if($("div.Daily").length>0)
    {
        $("div.Daily").remove();
    }
    if($("a.view-more").length>0)
    {
        $("a.view-more").remove();
    }
    
})();


