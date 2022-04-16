from flask import Flask, render_template, request, session
from jedi import app
from jedi.modals.dbschema import db, User, Post
import json
import datetime
import os, sys


@app.get('/createpost')
def createpost():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        return render_template('createpost.html')


@app.post('/createpost')
def recvpost():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        data = request.get_json()
        new_content = data['content']
        current_time = str(datetime.datetime.now())
        user = User.query.get(session['uid'])
        cmd = f'echo {new_content} > temp.txt'
        r = os.popen(cmd)
        comd = 'curl -X POST -F file=@temp.txt ' + '"http://127.0.0.1:5001/api/v0/add"'
        result = os.popen(comd)
        a = json.loads(result.read())
        new_content_hash = a['Hash']
        post = Post(content=new_content,content_hash=new_content_hash,timestamp=current_time, user=user)
        db.session.add(post)
        db.session.commit()
        res_obj = {}
        res_obj.update({"status": 0})
        res_obj.update({"info": 'new post created successfully'})
        return json.dumps(res_obj)
