
let popups = 0;
const makePopup = (title, description) => {
    alert('callsed')
    let popupId = `popup_${popups}`
    let closePopup = () => document.getElementById(popupId).remove()

    let popupNode = document.createElement('div')
    popupNode.id = popupId
    popupNode.classList = 'horizontal classmorphism'

    let xNode = document.createElement('div')
    xNode.classList = 'pointer secondary-text'
    xNode.style.fontFamily = 'system-ui';
    xNode.style.fontSize = 'xxlarge';
    xNode.onclick = closePopup;
    xNode.innerText = 'X'

    let titleNode = document.createElement('h1')
    titleNode.innerText = title;

    let descNode = document.createElement('h1')
    descNode.innerText = title;
    popupNode.innerHTML = `
    <div class="pointer secondary-text" style="font-family: system-ui; font-size: xx-large;" onclick="${closePopup}">
    X
    </div> <hr class="vertical" style="height: 200px;">
    <div class="vertical">
        <h1>Work in <span style="color: white;">progress</span>!</h1> <hr>
        <p class="secondary-text">
            please be patient while i set up the website :) <br>
            (or press X to continue to the incomplete page)
        </p>
    </div>
    `


    popups += 1
    return popupNode
}

document.getElementById('popupblur').appendChild(makePopup('Work in progress!', 'site is incomplete'))

