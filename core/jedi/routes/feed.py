from flask import Flask, render_template, request, session
from flask_marshmallow import Marshmallow
from jedi import app
from jedi.modals.dbschema import db, ma, User, Post, UserSchema, PostSchema
import json
import datetime


@app.post('/ownfeed')
def feed_post():
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
