from flask import Flask, render_template, request, session, redirect
from jedi import app
from jedi.modals.dbschema import db, User, Post, Boostpost
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
        posts = db.session.query(Post,User).outerjoin(User,User.id == Post.user_id).all()
        posts_list = []
        for i in posts:
            tmp_dict = {}
            tmp_dict.update({"username":i[1].username})
            tmp_dict.update({"content":i[0].content})
            tmp_dict.update({"content_hash":i[0].content_hash})
            tmp_dict.update({"timestamp":i[0].timestamp})
            tmp_dict.update({"id":i[0].id})
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
            tmp_dict.update({"content_hash":i.content_hash})
            tmp_dict.update({"timestamp":i.timestamp})
            tmp_dict.update({"id":i.id})
            posts_list.append(tmp_dict)
        return json.dumps(posts_list)


@app.post('/allboostedposts')
def allboostedposts():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        boostedposts = Boostpost.query.all()
        boostedposts_list = []
        for i in boostedposts:
            post  =  Post.query.get(i.og_post_id)
            og_user = User.query.get(post.user_id)
            boosted_user = User.query.get(i.user_id)
            tmp_dict = {}
            tmp_dict.update({"boostpost_id":i.id})
            tmp_dict.update({"og_post_id":i.og_post_id})
            tmp_dict.update({"og_post_username":og_user.username})
            tmp_dict.update({"boosteduser_username":boosted_user.username})
            tmp_dict.update({"og_post_content":post.content})
            tmp_dict.update({"og_content_hash":post.content_hash})
            tmp_dict.update({"timestamp":i.timestamp})
            boostedposts_list.append(tmp_dict)
        return json.dumps(boostedposts_list)