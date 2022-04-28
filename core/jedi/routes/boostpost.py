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
            uid = session['uid']
            tm = Boostpost.query.filter_by(user_id=uid,og_post_id=og_post_id).first()
            if tm is None:
                current_time = str(datetime.datetime.now())
                user = User.query.get(session['uid'])
                boostpost = Boostpost(og_post_id=og_post_id,timestamp=current_time, user=user)
                db.session.add(boostpost)
                db.session.commit()
                res_obj = {}
                res_obj.update({"status": 0})
                res_obj.update({"info": 'post boosted successfully'})
                return json.dumps(res_obj)
            else:
                res_obj = {}
                res_obj.update({"status": 1})
                res_obj.update({"error": 'Original post has already been boosted'})
                return json.dumps(res_obj)


@app.post('/boostedposts')
def boostedposts():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        uid = session['uid']
        boostedposts = Boostpost.query.filter_by(user_id=uid).all()
        boostedposts_list = []
        for i in boostedposts:
            post  =  Post.query.get(i.og_post_id)
            og_user = User.query.get(post.user_id)
            tmp_dict = {}
            tmp_dict.update({"boostpost_id":i.id})
            tmp_dict.update({"og_post_id":i.og_post_id})
            tmp_dict.update({"og_post_username":og_user.username})
            tmp_dict.update({"og_post_content":post.content})
            tmp_dict.update({"og_content_hash":post.content_hash})
            tmp_dict.update({"timestamp":i.timestamp})
            boostedposts_list.append(tmp_dict)
        return json.dumps(boostedposts_list)