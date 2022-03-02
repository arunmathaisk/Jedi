from flask import Flask, render_template, request, session
from jedi import app
from jedi.modals.dbschema import db, User, Boostpost, Post
import json
import datetime

@app.post('/boostpost')
def recvboostpost():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        data = request.get_json()
        og_post_id = data['og_post_id']
        og_post = Post.query.get(og_post_id)
        if og_post is None:
            res_obj = {}
            res_obj.update({"status": 1})
            res_obj.update({"error": 'original post does not exist'})
            return json.dumps(res_obj)
        else:
            current_time = str(datetime.datetime.now())
            user = User.query.get(session['uid'])
            boostpost = Boostpost(og_post_id=og_post_id,timestamp=current_time, user=user)
            db.session.add(boostpost)
            db.session.commit()
            res_obj = {}
            res_obj.update({"status": 0})
            res_obj.update({"info": 'post boosted created successfully'})
            return json.dumps(res_obj)
