// default must be set at the top of the map
const suites = new Map([
    ["default", "bookworm"],
    ["bookworm", "Debian 12 Bookworm (stable)"],
    ["trixie", "Debian 13 Trixie (testing)"]
]);

// default must be set at the top of the map
const desktops = new Map([
    ["default", "GNOME"],
    ["", "Plain text console, no X11"],
    ["XFCE", "XFCE desktop"],
    ["LXDE", "LXDE desktop"],
    ["LXQT", "LXQT desktop"],
    ["GNOME", "GNOME desktop"],
    ["KDE", "KDE desktop"],
    ["MATE", "MATE desktop"],
    ["CINNAMON", "CINNAMON desktop"]
]);

function populateSelect(pSelectElement, pMap) {
    let toMakeDefaultKey = null;
    pMap.forEach(function(value, key) {
        if(key === "default") {
            toMakeDefaultKey = value;
        } else {
            let opt = document.createElement("option");
            opt.value = key;
            opt.innerHTML = value;
            if(key === toMakeDefaultKey) {
                opt.selected = "selected";
            }
            pSelectElement.appendChild(opt);
        }
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