### Tampermonkey

Scripte einfach in Tampermonkey einbinden.

#### Für die lokale Entwicklung
Dokumentation: https://www.tampermonkey.net/documentation.php?ext=dhdg


Dieses Script als neues Script hinterlegen
```js
// ==UserScript==
// @name         Bezeichnung
// @homepage     https://www.alexanderhentzsch.de
// @version      0.1.0
// @description  Beschreibung
// @author       Alexander Hentzsch
// @include      https://wol.jw.org*
// @require      https://kit.fontawesome.com/2e52e2418a.js
// @grant        none
// ==/UserScript==

const url = "http://localhost:8080/scripte/wol.media.playbackrate.js";
let remoteScript = document.createElement('script');
remoteScript.src = `${url}?ts=${new Date().getTime()}`;
document.body.appendChild(remoteScript);
```
PHP-Server auf localhost:8080 starten.

Nach Fertigstellung über Registerkarte Hilfsmittel >>> Installation via URL die URL zur Scriptdatei
angeben, z.B. http://localhost:8080/scripte/wol.media.playbackrate.js