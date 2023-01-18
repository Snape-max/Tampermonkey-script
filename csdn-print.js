// ==UserScript==
// @name         CSDN print
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domin=blog.csdn.net
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByTagName("BODY")[0].onbeforeprint = function() {
      $("div#csdn-toolbar").hide();
      $("div.toolbar-inside.exp1").hide();
      $("div.article-info-box").hide();
      $("div.left-toolbox").hide();
      $("div.csdn-side-toolbar").hide();
      $("div.first-recommend-box.recommend-box").hide();
      $("div.second-recommend-box.recommend-box").hide();
      $("div.recommend-box.insert-baidu-box.recommend-box-style").hide();
      $("div.template-box").hide();
      $("div.blog-footer-bottom").hide();
      $("div#blogColumnPayAdvert").hide();
  }
  document.getElementsByTagName("BODY")[0].onafterprint = function() {
      $("div#csdn-toolbar").show();
      $("div.toolbar-inside.exp1").show();
      $("div.article-info-box").show();
      $("div.left-toolbox").show();
      $("div.csdn-side-toolbar").show();
      $("div.first-recommend-box.recommend-box").show();
      $("div.second-recommend-box.recommend-box").show();
      $("div.recommend-box.insert-baidu-box.recommend-box-style").show();
      $("div.template-box").show();
      $("div.blog-footer-bottom").show();
      $("div#blogColumnPayAdvert").show();
    }

})();


