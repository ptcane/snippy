import os

def notebook_list():
    source_dir = r'templates/html_notebooks'
    file_names = os.listdir(source_dir)   
    nb_list = [file.split('.')[0] for file in file_names]
    
    return nb_list
