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
        posts_schema = PostSchema(many=True)
        output = posts_schema.dump(posts)
        return json.dumps(output)

