from flask import Flask,render_template,request, session, redirect
from jedi import app
from jedi.modals.dbschema import db,User, Bookmark, Post
import json

@app.post('/bookmarkpost')
def bookmarkpost():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        data = request.get_json()
        post_id = data['post_id']
        post = Post.query.get(post_id)
        if post is None:
            res_obj = {}
            res_obj.update({"status": 1})
            res_obj.update({"error": 'post does not exist'})
            return json.dumps(res_obj)
        else:
            uid = session['uid']
            tm = Bookmark.query.filter_by(user_id=uid,post_id=post_id).first()
            if tm is None:
                user = User.query.get(session['uid'])
                bookmark = Bookmark(post_id=post_id,user=user)
                db.session.add(bookmark)
                db.session.commit()
                res_obj = {}
                res_obj.update({"status": 0})
                res_obj.update({"info": 'Bookmark added successfully'})
                return json.dumps(res_obj)
            else:
                res_obj = {}
                res_obj.update({"status": 1})
                res_obj.update({"error": 'Bookmark has already been added'})
                return json.dumps(res_obj)


@app.post('/bookmarkedposts')
def bookmarkedposts():
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        uid = session['uid']
        bookmarks = Bookmark.query.filter_by(user_id=uid).all()
        bookmarks_list = []
        for i in bookmarks:
            post  =  Post.query.get(i.post_id)
            user = User.query.get(post.user_id)
            tmp_dict = {}
            tmp_dict.update({"bookmark_id":i.id})
            tmp_dict.update({"post_id":post.id})
            tmp_dict.update({"post_username":user.username})
            tmp_dict.update({"post_content":post.content})
            tmp_dict.update({"content_hash":post.content_hash})
            tmp_dict.update({"timestamp":post.timestamp})
            bookmarks_list.append(tmp_dict)
        return json.dumps(bookmarks_list)