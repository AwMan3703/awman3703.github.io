
//utility
let ids_counter = 0
const getId = (name) => { ids_counter += 1; return name + "_" + ids_counter; }
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
    let popupId = getId("popup")
    let closePopup = () => {
        const e = document.getElementById(popupId)
        e.style.width = "100vw";
        e.style.opacity = "0%";
        e.remove()
        closeCallback(e)
    }

    let popupNode = make('div')
    popupNode.id = popupId
    popupNode.classList = 'horizontal glassmorphism material-border rounded'
    popupNode.style = "align-items: center; gap: 20px; padding: 20px;"

    let xNode = make('div')
    xNode.classList = 'pointer secondary-text'
    xNode.style.fontFamily = '\'Courier New\', Courier, monospace;'
    xNode.style.fontSize = 'xxx-large'
    xNode.setAttribute('onmousedown', 'this.style.fontSize = "10rem"')
    xNode.setAttribute('onmouseover', 'this.style.fontSize = "4rem"')
    xNode.setAttribute('onmouseout', 'this.style.fontSize = "xxx-large"')
    xNode.onclick = closePopup
    xNode.innerText = 'X'

    let bodyNode = make('div')
    bodyNode.classList = 'vertical'

    let titleNode = make('h1');
    titleNode.innerHTML = title;
    titleNode.style.margin = '0';

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

// ----- // specific functions // ----- //
function startupPopup() {
    document.getElementById('popup-blur').appendChild(makePopup(
        'Work in progress :)',
        'This site is not yet finished, and may not work properly!'+
        '<br>(press/click X to dismiss)'+
        '<hr style="opacity:2%">'+
        '<span class="unimportant-text">For more information, contact me on Discord - Aw Man#3646'+
        '<br>and Twitter (or X, whatever you want to call it) - @Aw_Man3704</span>',
        function(_) {
            const e = document.getElementById('popup-blur')
            e.style.opacity = '0%';
            e.remove()
        }
    ))
}

function setSkillCardsIcons() {
    const targets = document.querySelectorAll("#skills-list .skill-card");

    for (const target of targets) {
        target.style.backgroundImage = target.style.backgroundImage + ("url(" + target.getAttribute("data-iconurl") + ")");
        target.style.backgroundRepeat = "no-repeat";
    }
}
