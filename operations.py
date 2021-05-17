import os

def snip_list():
    source_dir = r'templates/snips'
    file_names = os.listdir(source_dir)   
    snips = [file.split('.')[0] for file in file_names]
    
    return snips
