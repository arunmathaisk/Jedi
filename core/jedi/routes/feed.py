from flask import Flask, render_template, request, session, redirect
from flask_marshmallow import Marshmallow
from jedi import app
from jedi.modals.dbschema import db, ma, User, Post, UserSchema, PostSchema
import json
import datetime

@app.get('/feed')
def feed():
    if not 'uid' in session:
        return redirect('/login')
    else:
        return render_template('feed.html')



@app.post('/allposts')
def all_posts():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        uid = session['uid']
        posts = Post.query.all()
        posts_list = []
        for i in posts:
            tmp_dict = {}
            tmp_dict.update({"content":i.content})
            tmp_dict.update({"timestamp":i.timestamp})
            tmp_dict.update({"id":i.id})
            posts_list.append(tmp_dict)
        return json.dumps(posts_list)

@app.post('/createdposts')
def created_posts():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        uid = session['uid']
        posts = Post.query.filter_by(user_id=uid).all()
        posts_list = []
        for i in posts:
            tmp_dict = {}
            tmp_dict.update({"content":i.content})
            tmp_dict.update({"timestamp":i.timestamp})
            tmp_dict.update({"id":i.id})
            posts_list.append(tmp_dict)
        return json.dumps(posts_list)

