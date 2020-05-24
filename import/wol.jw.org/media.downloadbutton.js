// ==UserScript==
// @version      1.1.3
// @name         WOL - Download-Button
// @description  Download-Button für Audio-Media
// @author       Alexander Hentzsch
// @homepage     https://www.alexanderhentzsch.de
// @include      https://wol.jw.org*
// @require      https://kit.fontawesome.com/2e52e2418a.js
// @downloadURL  https://alexanderhentzsch-tampermonkey.netlify.app/import/wol.jw.org/media.downloadbutton.js
// @updateURL    https://alexanderhentzsch-tampermonkey.netlify.app/import/wol.jw.org/media.downloadbutton.js
// @supportURL   https://github.com/AlexanderHentzsch/Tampermonkey
// @grant        none
// ==/UserScript==

const url = "https://alexanderhentzsch-tampermonkey.netlify.app/scripte/wol.jw.org/media.downloadbutton.js";
let remoteScript = document.createElement('script');
remoteScript.src = `${url}?ts=${new Date().getTime()}`;
document.body.appendChild(remoteScript);