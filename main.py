from flask import Flask, render_template,send_from_directory, request
from build import initialize
from operations import notebook_list

initialize()

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():

  nbs = notebook_list()

  if request.method == 'GET':
    return render_template('index.html', nb='home', nbs=nbs)

  else:
    nb='home'            
    return render_template('index.html', nb=nb)



@app.route('/<path:filename>.<ext>')
def static_files(filename, ext):

    file = f'{filename}.{ext}'
    return send_from_directory('static', file)

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['TEMPLATES_AUTO_RELOAD'] = True

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)