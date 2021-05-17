

function show_operations() {
  let x = document.querySelector("#operations");
  x.classList.toggle("hidden");
}

document.querySelector("#load").addEventListener('click', show_operations)

var bootstrapThebe = function() {
    thebelab.bootstrap();
}

let codeCells = document.querySelectorAll("pre")
codeCells.forEach(function(cell) {
  cell.setAttribute('data-executable', true),
  cell.setAttribute('data-language', "python")
})

function status_update() {
  thebelab.on("status", function (evt, data) {
    let status = document.querySelector("#status")
    status.innerHTML = data.status
    status.classList.add(data.status)
})
}

status_update()
