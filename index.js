
//utility
let ids_counter = 0
const getId = () => { ids_counter += 1; return ids_counter; }
const make = (tag) => { return document.createElement(tag); }
const getExt = (path) => { return path.split('.').pop(); }

//generic functions
function playAudio(path, volumePercentage) {
    const audio = new Audio(path);
    audio.volume = volumePercentage / 100;
    audio.play();
}

function scrollToTop() {
    document.body.scrollTo(0,0);
}

function makePopup(title, description, closeCallback = function(_){}) {
    let popupId = `popup_${getId()}`
    let closePopup = () => {
        const e = document.getElementById(popupId)
        e.remove()
        closeCallback(e)
    }

    let popupNode = make('div')
    popupNode.id = popupId
    popupNode.classList = 'popup horizontal glassmorphism'

    let xNode = make('div')
    xNode.classList = 'pointer secondary-text'
    xNode.style.fontFamily = '\'Courier New\', Courier, monospace;'
    xNode.style.fontSize = 'xxx-large'
    xNode.setAttribute('onmousedown', 'this.style.fontSize = \"10rem\"')
    xNode.setAttribute('onmouseover', 'this.style.fontSize = \"4rem\"')
    xNode.setAttribute('onmouseout', 'this.style.fontSize = \"xxx-large"')
    xNode.onclick = closePopup
    xNode.innerText = 'X'

    let bodyNode = make('div')
    bodyNode.classList = 'vertical'

    let titleNode = make('h1')
    titleNode.innerHTML = title;

    let descNode = make('p')
    descNode.classList = 'secondary-text'
    descNode.innerHTML = description;

    bodyNode.appendChild(titleNode)
    bodyNode.appendChild(make('hr'))
    bodyNode.appendChild(descNode)

    let vhr = make('hr')
    vhr.classList = 'vertical'
    vhr.style.height = '170px';

    popupNode.appendChild(xNode)
    popupNode.appendChild(vhr)
    popupNode.appendChild(bodyNode)

    return popupNode;
}

//specific functions
function startupPopup() {
    document.getElementById('popupblur').appendChild(makePopup(
        'Work suspended :(',
        'This site is not yet finished, and may not work properly. I have suspended development as i am busy on a commission, will return to it shortly!'+
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



