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
    document.querySelector('.atkbtn').addEventListener('click', attack);
    document.querySelector('.cwrdbtn').addEventListener('click', cowardice);
}

/* The code segment below is run when we load the page. - Samuel.How*/
window.addEventListener('load', function () {
    Shemonemon();
    document.querySelector('#progressbar1').addEventListener('mdl-componentupgraded',
        function () {
            this.MaterialProgress.setProgress(44);
        });
    document.querySelector('#progressbar2').addEventListener('mdl-componentupgraded',
        function () {
            this.MaterialProgress.setProgress(44);
        });
    loadBattle();
})

function addToCombatLog(text, colour) {
    let element = document.createElement("p");
    element.innerHTML = text;
    element.style.color = colour;
    log = document.querySelector('.log');
    log.appendChild(element);
    log.scrollTop = log.scrollHeight - log.clientHeight;
}