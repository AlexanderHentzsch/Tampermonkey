const CHANGE_VALUE = 0.1;
let interval;

$(function () {
    //--- prüfen bis Button verfügbar
    interval = setInterval(function () {
        let DOM = $('#documentMenuButton');
        if (DOM.length > 0) {
            $('#documentMenuButton').on('click', function(){
                addDocumentMenuPlaybackRate('open');
            });
            clearInterval(interval);
        }
    }, 100)
})

function addDocumentMenuPlaybackRate(type) {
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
                    <span class="holdElementsPlaybackRate btnPlaybackRate">Wiedergaberate: </span>
                    <span style="float: right">
                        <span id="btnPlaybackRateSub" class="btnPlaybackRate"><i class="fas fa-minus-circle"></i></span>
                        <span class="holdElementsPlaybackRate btnPlaybackRate">${nPlaybackRate.toString()}</span>
                        <span id="btnPlaybackRateAdd" class="btnPlaybackRate"><i class="fas fa-plus-circle"></i></span>
                    </span>
                </li>`;

    let DOMContainer = $('#media-console');
    if (DOMContainer.length > 0) {
        $(".btnPlaybackRate").unbind();
        DOMContainer.remove();
    }

    $('ul.documentMenu').append($(html));

    $('#btnPlaybackRateSub').click(function(){addDocumentMenuPlaybackRate('sub');});
    $('#btnPlaybackRateAdd').click(function(){addDocumentMenuPlaybackRate('add');});
    $('.holdElementsPlaybackRate').click(function(){addDocumentMenuPlaybackRate('hold');});

    if (type !== undefined && type !== 'open') {
        //--- Optionsmenü wieder öffnen
        setTimeout(function () {
            $('#documentMenuButton').click();
        }, 10);
    }
}