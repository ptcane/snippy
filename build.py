import os
import shutil
import markdown
from glob import glob
import re
import subprocess

def copy_image(file_name):

  source_dir = r'notebooks/images/'
  target_dir = r'static/images/'

  try:
    shutil.copy(os.path.join(source_dir, file_name), target_dir)
  except:
    pass

def convert_notebook(nb_file):

  nb_name = nb_file.rsplit(r'/')[1].split('.')[0]
  subprocess.run(["jupytext", "--to", "markdown", f"notebooks/{nb_name}.ipynb"])
  
  #Convert markdown to HTML
  with open(f'notebooks/{nb_name}.md', 'r') as f:
      text = f.read()
      html = markdown.markdown(text, extensions=['fenced_code'])
  
  #Write HTML to new file
  with open(f'templates/html_notebooks/{nb_name}.html', 'w') as f:
      f.write(html)

  images = ' '.join(re.findall(r'\ssrc="([^"]+)"', html))
  for image in images:
    copy_image(image)

def initialize():

  #identify and convery notebooks
  nbs = glob(r'notebooks/*.ipynb')
  [convert_notebook(nb) for nb in nbs]

  #Copy images

  source_dir = r'notebooks/images/'
  file_names = os.listdir(source_dir)
  
  for file_name in file_names:
    copy_image(file_name)