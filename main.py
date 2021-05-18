from flask import Flask, render_template,send_from_directory, request
from operations import snip_list
from os import getenv
#from build import initialize
#initialize()

try:
  repo = getenv("repo")
except:
  repo = "binder-examples/requirements"

app = Flask(__name__)

def save_snip(html, filename):
  return None


@app.route('/', methods=["GET", "POST"])
def index():

  snips = snip_list()

  if request.method=="POST":
    current = request.form['nb-code']
    snip = None

  else:
    snip = request.args.get("snip", "home")
    current = None

  return render_template('index.html', snip=snip, snips=snips, repo=repo, current=current)

@app.route('/<path:filename>.<ext>')
def static_files(filename, ext):

    file = f'{filename}.{ext}'
    return send_from_directory('static', file)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['TEMPLATES_AUTO_RELOAD'] = True

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)