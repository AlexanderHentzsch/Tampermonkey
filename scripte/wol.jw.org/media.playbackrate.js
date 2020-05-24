const CHANGE_VALUE = 0.1;
let interval;
const documentMenuButtonBindFunc = function () {
    addDocumentMenuPlaybackRate('open');
}

$(function () {
    //--- prüfen bis Button verfügbar
    interval = setInterval(function () {
        let DOM = $('#documentMenuButton');
        if (DOM.length > 0) {
            DOM.one('click', documentMenuButtonBindFunc);
            clearInterval(interval);
        }
    }, 100)
})

function addDocumentMenuPlaybackRate(type) {
    let nPlaybackRate = 1;
    let DOM = $('audio');
    if (DOM.length === 0) {
        return;
        // nPlaybackRate = "no media";
    } else {
        DOM = DOM[0];
        nPlaybackRate = DOM.playbackRate.toFixed(1);
        if (type === 'add' || type === 'sub') {
            if (type === 'add') {
                nPlaybackRate = DOM.playbackRate + CHANGE_VALUE;
            } else if (type === 'sub') {
                nPlaybackRate = DOM.playbackRate - CHANGE_VALUE;
            }
            nPlaybackRate = nPlaybackRate.toFixed(1);
            DOM.playbackRate = nPlaybackRate;
        }
    }

    const iconStyle = `position: relative; top: 3px; font-size: 24px; color: #8e8e8e`;

    let html = `<li id="media-console" style="
                user-select: none;">
                    <span class="holdElementsPlaybackRate">Wiedergaberate: </span>
                    <span style="float: right">
                        <span id="btnPlaybackRateSub">
                            <i class="far fa-minus-square" style="${iconStyle}"></i>
                        </span>
                        <span class="holdElementsPlaybackRate">${nPlaybackRate}</span>
                        <span id="btnPlaybackRateAdd">
                            <i class="btnPlaybackRate far fa-plus-square" style="${iconStyle}"></i>
                        </span>
                    </span>
                </li>`;

    let DOMContainer = $('#media-console');
    if (DOMContainer.length > 0) {
        DOMContainer.remove();
    }

    $('ul.documentMenu').append($(html));

    $('#btnPlaybackRateSub').click(function () {
        addDocumentMenuPlaybackRate('sub');
    });
    $('#btnPlaybackRateAdd').click(function () {
        addDocumentMenuPlaybackRate('add');
    });
    $('.holdElementsPlaybackRate').click(function () {
        addDocumentMenuPlaybackRate('hold');
    });


    if (type !== undefined && type !== 'open') {
        //--- Optionsmenü wieder öffnen
        setTimeout(function () {
            $('#documentMenuButton').click();
        }, 10);
    }
}