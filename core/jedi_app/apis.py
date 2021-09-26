from flask import Flask
from jedi_app import app

@app.route('/api')
def api():
    return "supp dawg"