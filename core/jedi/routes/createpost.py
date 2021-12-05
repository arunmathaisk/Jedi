from flask import Flask,render_template
from jedi import app

@app.get('/createpost')
def displayCreateNewPost():
    return render_template('createPost.html')