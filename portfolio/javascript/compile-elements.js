
function compileByFilter(filter, compileFunction) {
    const elements = document.querySelectorAll('*');
    for (const e of elements) {
        if ( filter(e) ) { compileFunction(e); }
    }
}

function compileByClass(className, compileFunction) {
    const elements = document.getElementsByClassName(className);
    for (const e of elements) {
        compileFunction(e);
    }
}

//-------------------------//

function btnHoverSound() {
    playAudio('../resources/audio/menu-hover3.wav', 20)
}

//-------------------------//

function compile_elements() {
    compileByClass('button-sound',
        (e) => { e.onmouseenter = btnHoverSound; })
    compileByFilter(
        (e)=>{ return (typeof(e.href)=="string" ? e.href.slice(-5) : "")==="[top]" },
        (e)=>{ e.setAttribute('onclick', 'scrollToTop()'); e.href="#" })
}