


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

    //document.querySelector('#progressbar1').MaterialProgress.setProgress(44);
}

function attack() {
    addToCombatLog("Attack", "#00ff00");
}

function cowardice() {
    addToCombatLog("Cowardice", "#ff0000");
}