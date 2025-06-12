const partitions = new Map([
    ["ONE", "One partition"],
    ["ONE_LVM", "One partition using LVM"],
    ["HOME", "Partition for /home"],
    ["HOME_LVM", "Partition for /home using LVM"]
])
const partitions_selected = "ONE"

const elementsToUpdate = [
    
];

function updateAllElements() {
    for(const element of elementsToUpdate) {
        document.getElementById(element[0]).innerHTML = element[1];
    }
}

function populateSelect(pId, pMap, pSelected) {
    let select = document.getElementById(pId);
    pMap.forEach(function(value, key) {
        let opt = document.createElement("option");
        opt.value = key;
        opt.innerHTML = value;
        if(key === pSelected) {
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

populateSelect("partition", partitions, partitions_selected)
updateAllElements();