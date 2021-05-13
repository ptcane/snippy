

function show_operations() {
  let x = document.querySelector("#operations");
  x.classList.toggle("hidden");
}

document.querySelector("#load-save").addEventListener('click', show_operations)

var bootstrapThebe = function() {
    thebelab.bootstrap();
}

//document.querySelector("#activate").addEventListener('click', bootstrapThebe)

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

var code_cell_html = '<div class="thebelab-cell"><div class="thebelab-input"><div class="CodeMirror cm-s-default codemirror-focused"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 5px; left: 112.885px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" tabindex="-1" cm-not-content="true"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" tabindex="-1" cm-not-content="true"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: -16px; border-right-width: 34px; min-height: 33px; min-width: 115.885px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre class="CodeMirror-line-like"><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style=""><div class="CodeMirror-cursor" style="left: 112.885px; top: 0px; height: 23.3333px;">&nbsp;</div></div><div class="CodeMirror-code" role="presentation"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">import</span> <span class="cm-variable">json</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 34px; width: 1px; border-bottom: 0px solid transparent; top: 33px;"></div><div class="CodeMirror-gutters" style="display: none; height: 67px;"></div></div></div></div><button class="thebelab-button thebelab-run-button" title="run this cell">run</button><button class="thebelab-button thebelab-restart-button" title="restart the kernel">restart</button><button class="thebelab-button thebelab-restartall-button" title="restart the kernel and run all cells">restart &amp; run all</button><div><div class="lm-Widget p-Widget jp-OutputArea"></div></div></div>'


function add_code() {
  
  $(".thebelab-cell").first().clone(true, true).appendTo( "#notebook");
}

function add_code2() {
  
  document.querySelector("#notebook").insertAdjacentHTML('beforeend', code_cell_html)
}

document.querySelector("#add_code").addEventListener('click', add_code)

$(".thebelab-cell").focus(function() {
  alert( "Handler for .focus() called." );
});



