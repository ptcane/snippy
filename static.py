from jinja2 import Environment, FileSystemLoader
from flask import send_from_directory

loader = FileSystemLoader('templates')
environment = Environment(loader=loader, cache_size=0)

pages = ['index']

for page in pages:

    template = environment.get_template(f'{page}.html')
    html = template.render()

    with open(f'static/{page}.html', 'w') as file:
        file.write(html)

def static_pages(page='index'):

    file = f'{page}.html'    
    return send_from_directory('static', file)


