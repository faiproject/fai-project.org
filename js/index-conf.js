const partitions = new Map([
    ["default", "One partition"],
    ["ONE_LVM", "One partition using LVM"],
    ["HOME", "Partition for /home"],
    ["HOME_LVM", "Partition for /home using LVM"]
]);

const elementsToUpdate = [
    
];

function updateAllElements() {
    for(const element of elementsToUpdate) {
        document.getElementById(element[0]).innerHTML = element[1];
    }
}

const DEFAULT_KEY = "default";

function populateSelect(pId, pMap) {
    let select = document.getElementById(pId);
    pMap.forEach(function(value, key) {
        let opt = document.createElement("option");
        opt.value = key;
        opt.innerHTML = value;
        if(key === DEFAULT_KEY) {
            opt.selected = "selected";
        }
        select.appendChild(opt);
    });
}

function toggle_visibility(id) {
    let e = document.getElementById(id);
    if (e.style.display == 'none')
        e.style.display = 'inline';
    else
        e.style.display = 'none';
}

function toggle_all() {
    toggle_visibility('adv');
    toggle_visibility('adv2');
    toggle_visibility('adv3');
}

populateSelect("partition", partitions)
updateAllElements();