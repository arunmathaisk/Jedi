from flask import Flask,render_template,request
from jedi import app

@app.get('/createpost')
def displayCreateNewPost():
    return render_template('createPost.html')

@app.post('/createpost')
def recvPost():
    return request.form['newbpost']