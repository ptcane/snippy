import static

rules = [
    ('/', static.static_pages, ['GET']),
    ('/<string:page>', static.static_pages, ['GET']),
    
]