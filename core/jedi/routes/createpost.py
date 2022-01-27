from flask import Flask,render_template,request
from jedi import app
import os

@app.get('/createpost')
def createpost():
    return render_template('createPost.html')

@app.post('/createpost')
def recvpost():
    bpost  = request.form['newbpost']
    comd  = 'echo'+' ' + bpost + ' > '+ '/home/arun/Desktop/sweetwords'
    os.system(comd)
    scomd =  'scp /home/arun/Desktop/sweetwords  ubuntu@ipfs.arunmathaisk.in:/home/ubuntu/'
    os.system(scomd)
    return "file created sucessfully"