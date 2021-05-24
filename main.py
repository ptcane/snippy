from flask import Flask, render_template,send_from_directory, request, flash, session
from operations import snip_list
from os import getenv
#from build import initialize
#initialize()

try:
  repo = getenv("repo")
except:
  repo = "binder-examples/requirements"

url = "https://snippy.datadesigns.repl.co"

app = Flask(__name__)


@app.route('/', methods=["GET", "POST"])
def index():

  current, snip, filename = "", "", ""
  snips = snip_list()

  try:
    localhost = session['localhost']
  except:
    localhost = False

  if request.method=="POST":
    current = request.form['nb-code']
    operation = request.form['operation']

    if operation == 'add-cell':
      pass

    elif operation == 'save':

      if request.form['password'] == getenv("pw"):

        filename = request.form['filename']
        with open(f'templates/snips/{filename}.html', 'w') as f:
          f.write(current)
        snips.append(filename)
        flash(f"Snip '{filename}' saved!", "success")

      else:
        flash("Incorrect password - not saved.", "error")

    elif operation == 'localhost':
      session['localhost'] = True
      localhost = True
      flash("Use the following command to launch a Jupyter server on your local machine:", "info")
      flash(f"jupyter notebook --NotebookApp.token=t0k3n --NotebookApp.allow_origin='{url}'", "command")
      flash("Check that the port is 8888, i.e. Jupyter has loaded at the following URL:", "info")
      flash("http://localhost:8888/tree", "command")
    
    elif operation == 'disconnect':
      session['localhost'] = False
      localhost = False

  else:
      
    new = request.args.get("new", "")
    filename = request.args.get("snip", "")
    snip = new if new else f'snips/{request.args.get("snip", "intro")}'    

  return render_template('index.html', snip=snip, filename=filename, snips=snips, repo=repo, current=current, localhost=localhost)

@app.route('/<path:filename>.<ext>')
def static_files(filename, ext):

    file = f'{filename}.{ext}'
    return send_from_directory('static', file)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.secret_key = getenv('secret')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)