const container = document.getElementById("container");

function defaultGrid() {
    for(let i = 0; i < 256; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "cell";
    }
}

defaultGrid();