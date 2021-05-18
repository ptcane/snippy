#Snippy

## Interactive Python on Replit

First of all, fork the [repl](https://replit.com/@datadesigns/snippy). 

#### Load `.ipynb` notebooks
- To use existing Python Jupyter notebooks, add them to the `notebooks` folder, and then uncomment the following lines in `main.py` before running:
```
#from build import initialize
#initialize()
```

This will convert all of the notebooks to the HTML format required for Snippy. It will also copy over any images in `notebooks/images` to `static/images` so that any images used in a notebook file from this folder will continue to work in Snippy.

*Note that any notebook or cell metadata added in or by Jupyter is not retained once the notebook has been converted to a snip*.

#### Create a new snip

- Simply select `[NEW]` from the dropdown visible after clicking `LOAD SNIP`.

`ADD CELL` will add a new code cell at the bottom of the snip.

#### Save snips
- To be able to save snips, add a Replit Secret with a key of 'pw' and a value of your choice of password

#### Use additional packages
- To be able to use additional Python packages, link your repl to a GitHub repo, add the required packages to `requirements.txt`, and push your changes

