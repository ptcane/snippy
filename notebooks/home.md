<!--

---
jupyter:
  jupytext:
    hide_notebook_metadata: true
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.11.2
  kernelspec:
    display_name: Python 3
    language: python
    name: python3
---

-->

```python
import json
```

```python
with open('lists.ipynb') as f:
    data = json.load(f)
```

```python
data
```

```python
data['cells']
```

```python
cells = data['cells']
```

```python
for cell in cells:
    cell['metadata'] = dict()
```

```python
cells
```

```python
data['cells'] = cells
```

```python
with open('lists_new.ipynb', 'w') as f:
    f.write(json.dumps(data))
```

```python

```

```python

```

```python

```
