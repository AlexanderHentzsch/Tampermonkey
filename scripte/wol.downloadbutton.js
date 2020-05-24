// ==UserScript==
// @version      1.1.2
// @name         WOL - Download-Button
// @description  Download-Button für Audio-Media
// @author       Alexander Hentzsch
// @homepage     https://www.alexanderhentzsch.de
// @include      https://wol.jw.org*
// @require      https://kit.fontawesome.com/2e52e2418a.js
// @downloadURL  https://alexanderhentzsch-tampermonkey.netlify.app/scripte/wol.downloadbutton.js
// @updateURL    https://alexanderhentzsch-tampermonkey.netlify.app/scripte/wol.downloadbutton.js
// @supportURL   https://github.com/AlexanderHentzsch/Tampermonkey
// @grant        none
// ==/UserScript==

$(function () {
    createDownloadButton()
})

function createDownloadButton() {
    let html =
        `<div style="
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 220px;
            right: 24px;
            height: 48px;
            padding: 0 12px;
            background-color: #ecebe7;
            color: #2878bb;
            font-size: 22px;
            border-radius: 48px;
            z-index: 9999;
        ">
            <i id="btn-search-media" class="fas fa-search" style="margin-right: 8px"></i>
            <span id="search-media-result" style="display: none">0</span>
            <a id="btn-download-media" href="#" style="display: none">
                <i class="fas fa-cloud-download-alt"></i>
            </a>
        </div>`

    $('body').append($(html));
    $(`#btn-search-media`).click(searchFormMedia);
}

function searchFormMedia(){
    let DOM = {};
    DOM.audio = $('audio');
    DOM.result = $('#search-media-result');
    DOM.download = $('#btn-download-media');

    $(DOM.result).css("display", "none")
    $(DOM.download).css("display", "none")

    if(DOM.audio.length === 0) {
        $(DOM.result).css("display", "inline")
    } else {
        $(DOM.download).css("display", "inline")
        $(DOM.download).attr('href', (DOM.audio[0].src));
    }
}