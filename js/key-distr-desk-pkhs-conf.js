const suites = new Map([
    ["default", "Debian 12 Bookworm (stable)"],
    ["trixie", "Debian 13 Trixie (testing)"]
]);

const desktops = new Map([
    ["", "Plain text console, no X11"],
    ["XFCE", "XFCE desktop"],
    ["LXDE", "LXDE desktop"],
    ["LXQT", "LXQT desktop"],
    ["default", "GNOME desktop"],
    ["KDE", "KDE desktop"],
    ["MATE", "MATE desktop"],
    ["CINNAMON", "CINNAMON desktop"],
    ["More", "another option"]
]);

const DEFAULT_KEY = "default";

function populateSelect(pSelectElement, pMap) {
    pMap.forEach(function(value, key) {
        let opt = document.createElement("option");
        opt.value = key;
        opt.innerHTML = value;
        if(key === DEFAULT_KEY) {
            opt.selected = "selected";
        }
        pSelectElement.appendChild(opt);
    });
}

function populateSelectId(pId, pMap) {
    populateSelect(document.getElementById(pId), pMap);
}

function getElementInsideContainer(containerID, childID) {
    let elm = document.getElementById(childID);
    let parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

populateSelectId("desktop", desktops);
populateSelect(getElementInsideContainer("suite_div", "suite"), suites);