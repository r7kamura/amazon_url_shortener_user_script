// ==UserScript==
// @name         Amazon URL Shortener
// @namespace    https://github.com/r7kamura/amazon_url_shortener_user_script
// @version      0.0.1
// @description  Automatically shorten Amazon product URL.
// @author       r7kamura
// @include      https://smile.amazon.com/*
// @include      https://www.amazon.ae/*
// @include      https://www.amazon.au/*
// @include      https://www.amazon.ca/*
// @include      https://www.amazon.cn/*
// @include      https://www.amazon.co.jp/*
// @include      https://www.amazon.co.uk/*
// @include      https://www.amazon.com/*
// @include      https://www.amazon.com.br/*
// @include      https://www.amazon.com.mx/*
// @include      https://www.amazon.com.tr/*
// @include      https://www.amazon.de/*
// @include      https://www.amazon.es/*
// @include      https://www.amazon.fr/*
// @include      https://www.amazon.in/*
// @include      https://www.amazon.it/*
// @include      https://www.amazon.nl/*
// @include      https://www.amazon.sa/*
// @include      https://www.amazon.se/*
// @include      https://www.amazon.sg/*
// @downloadURL  https://github.com/r7kamura/amazon_url_shortener_user_script/raw/main/amazon_url_shortener.user.js
// @updateURL    https://github.com/r7kamura/amazon_url_shortener_user_script/raw/main/amazon_url_shortener.user.js
// @supportURL   https://github.com/r7kamura/amazon_url_shortener_user_script/issues
// ==/UserScript==

(function () {
  function replaceState(path) {
    window.history.replaceState({}, "", path);
  }

  const asinElement = document.querySelector(
    '#ASIN, input[name="idx.asin"], input[name="ASIN.0"], input[name="titleID"]'
  );

  if (asinElement) {
    replaceState(`/dp/${asinElement.value}`);
  } else {
    const href = window.location.href;
    const match = href.match(/\/(?:dp|gp\/product)\/([A-Z0-9]{10})[/?]?/);
    if (match) {
      replaceState(`/dp/${match[1]}`);
    }
  }
})();
