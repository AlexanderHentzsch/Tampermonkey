// ==UserScript==
// @name         WOL - Media Playback Rate
// @description  Buttons um die Wiedergabegeschwindigkeit von Audio-Containern zu ändern
// @homepage     https://www.alexanderhentzsch.de
// @version      1.0.0
// @downloadURL  https://raw.githubusercontent.com/AlexanderHentzsch/Tampermonkey/master/scripte/wol.media.playbackrate.js
// @updateURL    https://raw.githubusercontent.com/AlexanderHentzsch/Tampermonkey/master/scripte/wol.media.playbackrate.js
// @author       Alexander Hentzsch
// @include      https://wol.jw.org*
// @require      https://kit.fontawesome.com/2e52e2418a.js
// @grant        none
// ==/UserScript==

const CHANGE_VALUE = 0.1;

$(function () {
    createPlaybackRateContainer()
})

function createPlaybackRateContainer(type) {
    let nPlaybackRate = 1;
    let DOM = $('audio');
    if (DOM.length === 0) {
        nPlaybackRate = "no media";
    } else {
        DOM = DOM[0];
        if (type === undefined || type === 'hold') {
            nPlaybackRate = DOM.playbackRate;
        } else if (type === 'add') {
            nPlaybackRate = DOM.playbackRate + CHANGE_VALUE;
        } else if (type === 'sub') {
            nPlaybackRate = DOM.playbackRate - CHANGE_VALUE;
        }
        nPlaybackRate = nPlaybackRate.toFixed(1);
        DOM.playbackRate = nPlaybackRate;
    }

    let html = `<li id="media-console" style="
                user-select: none;">
                    <span onclick="createPlaybackRateContainer('hold')">Wiedergaberate: </span>
                    <span style="float: right">
                        <span onclick="createPlaybackRateContainer('sub')"><i class="fas fa-minus-circle"></i></span>
                        <span onclick="createPlaybackRateContainer('hold')">${nPlaybackRate.toString()}</span>
                        <span onclick="createPlaybackRateContainer('add')"><i class="fas fa-plus-circle"></i></span>
                    </span>
                </li>`;

    let DOMContainer = $('#media-console');
    if (DOMContainer.length > 0)
        DOMContainer.remove();

    $('ul.documentMenu').append($(html));

    if (type !== undefined) {
        //--- Optionsmenü wieder öffnen
        setTimeout(function () {
            $('#documentMenuButton').click();
        }, 10);
    }
}