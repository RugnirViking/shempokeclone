


function loadBattle() {
    window.allyCreature = {
        "name": "Lightning Mouse",
        "maxhp": 20, "str": 6, "agi": 14, "spd": 17, "end": 5
    }

    window.enemyCreature = {
        "name": "Billie Eilish",
        "maxhp": 6, "str": 66, "agi": 66, "spd": 66, "end": 66
    }

    allyElement = document.querySelector("#ally");
    enemyElement = document.querySelector("#enemy");
    loadCreature(allyElement, window.allyCreature);
    loadCreature(enemyElement, window.enemyCreature);
    allyElement.querySelector('#progressbar1').addEventListener('mdl-componentupgraded',
        function () {
            this.MaterialProgress.setProgress(window.allyCreature.hp / allyCreature.maxhp * 100);
            window.allyHpBar = this.MaterialProgress;
        });
    enemyElement.querySelector('#progressbar1').addEventListener('mdl-componentupgraded',
        function () {
            this.MaterialProgress.setProgress(window.enemyCreature.hp / enemyCreature.maxhp * 100);
            window.enemyHpBar = this.MaterialProgress;
        });
}

function loadCreature(Element, Creature) {
    Creature.hp = Creature.maxhp;

    nameElement = Element.querySelector(".name");
    nameElement.innerHTML = Creature.name;

    Element.querySelectorAll(".maxhp").forEach(element => {
        element.innerHTML = "HP: " + Creature.hp + "/" + Creature.maxhp;
    });

    strElement = Element.querySelector(".str");
    strElement.innerHTML = "STR: " + Creature.str;

    agiElement = Element.querySelector(".agi");
    agiElement.innerHTML = "AGI: " + Creature.agi;

    spdElement = Element.querySelector(".spd");
    spdElement.innerHTML = "SPD: " + Creature.spd;

    endElement = Element.querySelector(".end");
    endElement.innerHTML = "END: " + Creature.end;


}

function attack() {
    window.enemyCreature.hp = window.enemyCreature.hp - window.allyCreature.str;
    addToCombatLog("Attack", "#00ff00");
    updateHpBar();
}

function cowardice() {
    addToCombatLog("Cowardice", "#ff0000");
}

function updateHpBar() {
    allyElement = document.querySelector("#ally");
    enemyElement = document.querySelector("#enemy");

    window.allyHpBar.setProgress(window.allyCreature.hp / window.allyCreature.maxhp * 100);
    window.enemyHpBar.setProgress(window.enemyCreature.hp / window.enemyCreature.maxhp * 100);

    if (window.allyCreature.hp <= 0) {
        window.allyCreature.hp = 0;
    }
    if (window.enemyCreature.hp <= 0) {
        window.enemyCreature.hp = 0;
    }

    if (window.allyCreature.hp == 0) {
        allyElement.querySelectorAll(".maxhp").forEach(element => {
            element.innerHTML = "Fainted.";
        });
    } else {
        allyElement.querySelectorAll(".maxhp").forEach(element => {
            element.innerHTML = "HP: " + window.allyCreature.hp + "/" + window.allyCreature.maxhp;
        });
    }

    if (window.enemyCreature.hp == 0) {
        enemyElement.querySelectorAll(".maxhp").forEach(element => {
            element.innerHTML = "Fainted.";
        });
    } else {
        enemyElement.querySelectorAll(".maxhp").forEach(element => {
            element.innerHTML = "HP: " + window.enemyCreature.hp + "/" + window.enemyCreature.maxhp;
        });
    }
}