from flask import Flask
from jedi import app

@app.route('/')
def index():
    return "hi"