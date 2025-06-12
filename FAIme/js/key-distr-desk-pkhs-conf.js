const suites = new Map([
    ["bookworm", "Debian 12 Bookworm (stable)"],
    ["trixie", "Debian 13 Trixie (testing)"]
]);
const suite_selected = "bookworm";

const desktops = new Map([
    ["", "Plain text console, no X11"],
    ["XFCE", "XFCE desktop"],
    ["LXDE", "LXDE desktop"],
    ["LXQT", "LXQT desktop"],
    ["GNOME", "GNOME desktop"],
    ["KDE", "KDE desktop"],
    ["MATE", "MATE desktop"],
    ["CINNAMON", "CINNAMON desktop"],
    ["More", "another option"]
]);
const desktop_selected = "GNOME";

function populateSelect(pSelectElement, pMap, pSelected) {
    pMap.forEach(function(value, key) {
        let opt = document.createElement("option");
        opt.value = key;
        opt.innerHTML = value;
        if(key === pSelected) {
            opt.selected = "selected";
        }
        pSelectElement.appendChild(opt);
    });
}

function populateSelectId(pId, pMap, pSelected) {
    populateSelect(document.getElementById(pId), pMap, pSelected);
}

function getElementInsideContainer(containerID, childID) {
    let elm = document.getElementById(childID);
    let parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}

populateSelectId("desktop", desktops, desktop_selected);
populateSelect(getElementInsideContainer("suite_div", "suite"), suites, suite_selected);