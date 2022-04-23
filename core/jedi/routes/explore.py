from flask import Flask, render_template, request, session, redirect
from jedi import app
from jedi.modals.dbschema import db, User
import json
import datetime

@app.get('/explore')
def explore():
    if not 'uid' in session:
        return redirect('/login')
    else:
        return render_template('explore.html')


@app.post('/explore')
def explore_post():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        users = User.query.order_by(User.username).all()
        user_list = []
        for i in users:
            tmp_dict = {}
            tmp_dict.update({"id":i.id})
            tmp_dict.update({"username":i.username})
            user_list.append(tmp_dict)
        return json.dumps(user_list)
