function show_operations() {
  let x = document.querySelector("#operations");
  x.classList.toggle("hidden");
}

function show_save() {
  let x = document.querySelector("#save-section");
  x.classList.toggle("hidden");
}

document.querySelector("#load").addEventListener('click', show_operations)
document.querySelector("#save").addEventListener('click', show_save)

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

function get_code(element) {
    let cell_input = element.querySelector(".thebelab-input").innerText;
    let code_block = "<pre>" + cell_input + "</pre>";
    code_block = code_block.replace(/\u200B/g,'');
    return code_block
  }


$(function save_snip() {
  $('#save-form').submit(function() {
  let notebook = document.querySelector("#notebook").innerHTML;
  
  const cell_blocks = document.querySelectorAll(".thebelab-cell")
  cell_blocks.forEach(cell => {
    cell.outerHTML = get_code(cell)
  })

  document.querySelector("#nb-code").setAttribute("value",document.querySelector("#notebook").innerHTML)
})
})

$(function add_cell() {
  $('#add-cell-form').submit(function() {
  let notebook = document.querySelector("#notebook").innerHTML;
  const cell_blocks = document.querySelectorAll(".thebelab-cell")
  cell_blocks.forEach(cell => {
    cell.outerHTML = get_code(cell)
  })
  
  
  nb = document.querySelector("#notebook")
  nb.insertAdjacentHTML('beforeend', '<pre></pre>')
  document.querySelector("#add-cell-input").setAttribute("value",document.querySelector("#notebook").innerHTML)
})
})