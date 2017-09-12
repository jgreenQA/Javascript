var vehicles = [];

function add() {
    var make = document.getElementById('val-make').value;
    var model = document.getElementById('val-model').value;

    vehicles.push({make: make, model: model});

    printContents();
}

function remove() {
    var make = document.getElementById('val-make').value;
    var model = document.getElementById('val-model').value;

    vehicles.splice(vehicles.findIndex((element) => element.make === make && element.model === model),1);

    printContents();
}

function printContents() {
    document.getElementById('text-area').value = "";
    for (var key in vehicles) {
        document.getElementById('text-area').value +=
            vehicles[key].make + " - " +
            vehicles[key].model + "\n";
    }
}