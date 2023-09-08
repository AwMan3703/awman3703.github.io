
function startupPopup() {
    document.getElementById('popupblur').appendChild(makePopup(
        'Work in progress :)',
        'This site is not yet finished, and may not work properly.'+
        '<br>(press/click X to dismiss)'+
        '<hr style="opacity:2%">'+
        '<span style="opacity:15%">For more information, contact me on Discord - Aw Man#3646'+
        '<br>and Twitter (or X, whatever you wanna call it) - @Aw_Man3704</span>',
        function(_) {
            const e = document.getElementById('popupblur')
            e.style.opacity = '0%';
            e.remove()
        }
    ))
}

//startup callbacks
window.onload = function() {
    startupPopup();
};