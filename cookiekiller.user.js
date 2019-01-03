// ==UserScript==
// @name         TGS Cookie Killer
// @namespace    https://github.com/rgalonso
// @downloadURL  https://github.com/rgalonso/tgs_cookie_killer/raw/master/cookiekiller.user.js
// @version      0.1
// @description  Kills scroll cookies set by The Great Suspender
// @author       stupid cat, rgalonso
// @match        *://*/*
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function () {
    'use strict';
    let parts = document.cookie.split('; ');
    for (const cookie of parts) {
        if (cookie.startsWith('gsScrollPos')) {
            document.cookie = cookie + '; Max-Age=0';
        }
    }
})();
