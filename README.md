### Tampermonkey

#### Scripte für Tampermonkey
##### Importieren
AddOn Tampermonkey >>> Übersicht >>> Hilfsmittel (Registerkarte) >>> Installation via URL

##### Watchtower Online Library
- Dowloadbutton für Media: https://alexanderhentzsch-tampermonkey.netlify.app/import/wol.jw.org/media.downloadbutton.js
- Buttons um die Wiedergabegeschwindigkeit zu ändern: https://alexanderhentzsch-tampermonkey.netlify.app/import/wol.jw.org/media.playbackrate.js


#### Für die lokale Entwicklung
Dokumentation: https://www.tampermonkey.net/documentation.php

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

const url = "http://localhost:8080/scripte/media.playbackrate.js";
let remoteScript = document.createElement('script');
remoteScript.src = `${url}?ts=${new Date().getTime()}`;
document.body.appendChild(remoteScript);
```
PHP-Server auf localhost:8080 starten.