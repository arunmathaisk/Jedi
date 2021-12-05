from flask import Flask,render_template
from jedi import app

@app.get('/')
def home():
    return render_template('home.html')