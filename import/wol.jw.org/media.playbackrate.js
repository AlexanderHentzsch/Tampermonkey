// ==UserScript==
// @version      1.0.3
// @name         WOL - Media Playback Rate
// @description  Buttons um die Wiedergabegeschwindigkeit von Audio-Containern zu ändern
// @author       Alexander Hentzsch
// @homepage     https://www.alexanderhentzsch.de
// @include      https://wol.jw.org*
// @require      https://kit.fontawesome.com/2e52e2418a.js
// @downloadURL  https://alexanderhentzsch-tampermonkey.netlify.app/import/wol.jw.org/media.playbackrate.js
// @updateURL    https://alexanderhentzsch-tampermonkey.netlify.app/import/wol.jw.org/media.playbackrate.js
// @supportURL   https://github.com/AlexanderHentzsch/Tampermonkey
// @grant        none
// ==/UserScript==

const url = "https://alexanderhentzsch-tampermonkey.netlify.app/scripte/wol.jw.org/media.playbackrate.js";
let remoteScript = document.createElement('script');
remoteScript.src = `${url}?ts=${new Date().getTime()}`;
document.body.appendChild(remoteScript);