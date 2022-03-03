function Shemonemon() {
    var button = document.querySelector('.goodbtn');
    var dialog = document.querySelector('dialog');
    button.addEventListener('click', function () {
        dialog.showModal();
        /* Or dialog.show(); to show the dialog without a backdrop. */
    });
    dialog.querySelector('.close').addEventListener('click', function () {
        dialog.close();
    });
    document.querySelector('.atkbtn').addEventListener('click', function () {
        attack();
    });
    document.querySelector('.cwrdbtn').addEventListener('click', function () {
        cowardice();
    });
}
window.addEventListener('load', function () {
    Shemonemon();
})

function attack() {
    addToCombatLog("Attack", "#00ff00");
}

function cowardice() {
    addToCombatLog("Cowardice", "#ff0000");
}

function addToCombatLog(text, colour) {
    let element = document.createElement("p");
    element.innerHTML = text;
    element.style.color = colour;
    log = document.querySelector('.log');
    log.appendChild(element);
    log.scrollTop = log.scrollHeight - log.clientHeight;
}