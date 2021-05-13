pip install jupytext
pip install markdown

jupytext --to markdown notebooks/{}.ipynb notebook_metadata_filter = "-all"


https://jupytext.readthedocs.io/en/latest/using-cli.html