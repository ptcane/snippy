function show_operations() {
  let x = document.querySelector("#operations");
  x.classList.toggle("hidden");
}

function show_save() {
  let x = document.querySelector("#save-section");
  x.classList.toggle("hidden");
}

function clear_outputs() {

  const outputs = document.querySelectorAll(".jp-OutputArea")
  outputs.forEach(output => {
    output.innerHTML = ""
  })
}

function add_cell() {
  try {
  let x = document.querySelector(".new-cell");
  x.outerHTML = x.innerHTML;
  }
  catch {
    let nb = document.querySelector("#notebook");
    nb.insertAdjacentHTML('beforeend', '<p class="error">Cell limit reached!</p>');
  }

}

document.querySelector("#load").addEventListener('click', show_operations)
document.querySelector("#save").addEventListener('click', show_save)
document.querySelector("#add-cell").addEventListener('click', add_cell)

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


$(function use_localhost() {
  $('#use-localhost-form').submit(function() {    
  let notebook = document.querySelector("#notebook").innerHTML;
  const cell_blocks = document.querySelectorAll(".thebelab-cell")
  cell_blocks.forEach(cell => {
    cell.outerHTML = get_code(cell)
  })
  
  
  nb = document.querySelector("#notebook")
  document.querySelector("#snip-localhost").setAttribute("value",document.querySelector("#notebook").innerHTML)
})
})

$(document).ready(function() {
  document.querySelector(".thebelab-restart-button").addEventListener('click', clear_outputs)
  document.getElementsByTagName("html")[0].style.visibility = "visible";
});