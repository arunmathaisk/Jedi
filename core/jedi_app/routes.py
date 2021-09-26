from flask import Flask
from jedi_app import app

@app.route('/')
def index():
    return "hi"