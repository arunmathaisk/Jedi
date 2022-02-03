from flask import Flask,render_template,redirect,request,session
from jedi import app
from jedi.modals.dbschema import db,User

@app.get('/logout')
def logout():
    if 'uid' in session:
       session.pop('uid', None)
    return redirect('/')

@app.post('/logout')
def poslogout():
    if 'uid' in session:
       session.pop('uid', None)
    return redirect('/')