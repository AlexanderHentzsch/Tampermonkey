### Tampermonkey

Scripte einfach in Tampermonkey einbinden.

Für die lokale Entwicklung:
```js 
// ==UserScript==
// @name         WOL - Download-Button
// @namespace    https://wol.jw.org
// @version      0.1.0
// @description  Download-Button für Audio-Media
// @author       Alexander Hentzsch
// @include      https://wol.jw.org*
// @require      https://kit.fontawesome.com/2e52e2418a.js
// @grant        none
// ==/UserScript==

var remoteScript = document.createElement('script');
remoteScript.src = 'http://localhost:8080/scripte/wol.downloadbutton.js?ts='+(+new Date());
document.body.appendChild(remoteScript);
```
