from flask import Flask, render_template,send_from_directory, request
from build import initialize
from operations import snip_list

initialize()

repo = "ptcane/snippy"

app = Flask(__name__)

@app.route('/')
def index():

  snips = snip_list()
  snip = request.args.get("snip", "home")

  return render_template('index.html', snip=snip, snips=snips, repo=repo)

@app.route('/<path:filename>.<ext>')
def static_files(filename, ext):

    file = f'{filename}.{ext}'
    return send_from_directory('static', file)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['TEMPLATES_AUTO_RELOAD'] = True

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)