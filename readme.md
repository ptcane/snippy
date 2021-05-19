#Snippy

## Interactive Python on Replit

First of all, fork the [repl](https://replit.com/@datadesigns/snippy). 

#### Load `.ipynb` notebooks
- To use existing Python Jupyter notebooks, add them to the `notebooks` folder, and then uncomment the following lines in `main.py` before running:
```
#from build import initialize
#initialize()
```

This will convert all of the notebooks to the HTML format required for Snippy. 

*Note that any notebook or cell metadata added in or by Jupyter is not retained once the notebook has been converted to a snip*.

#### Create a new snip

- Select `[NEW]` from the dropdown visible after clicking `LOAD SNIP`.

`ADD CELL` will add a new code cell at the bottom of the snip.

#### Save snips

- To be able to save snips, add a Replit Secret with a key of 'pw' and a value of your choice of password, and another Replit Secret with a key of 'secret' which should contain a long string of random characters.

Press the `SAVE SNIP` button and enter a name for the snip, along with the password.

#### Use additional packages

- To be able to use additional Python packages, link your repl to a GitHub repo, add the required packages to `requirements.txt`, and push your changes.


#### Images and other resources

Images within the `notebooks/images` folder will be copied to `static/images` when `initialize()` is run, and visible on Snippy if they have been referenced in a markdown cell (or in an `<img>` tag under a `%%html` magic).

However when using within Python, the file structure of the repo needs to be used, i.e. using a prefix of `static/`, for example:

```python
with open('static/resources/teen_spirit.txt', 'r') as f:
```



