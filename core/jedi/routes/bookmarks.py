from flask import Flask,render_template,request, session, redirect
from jedi import app
from jedi.modals.dbschema import db,User, Bookmark, Post
import json


def does_post_exist(po_id):
    post = Post.query.filter_by(id=po_id).first()
    if post is None:
        return 0
    else:
        return 1

def does_bookmark_exist(po_id):
    post = Bookmark.query.filter_by(id=po_id).first()
    if post is None:
        return 0
    else:
        return 1

def add_bookmark(po_id):


@app.post('/bookmark/<int:post_id>')
def shutdown(post_id):
    if not 'uid' in session:
        res_obj = {}
        res_obj.update({"status": 1})
        res_obj.update({"error": 'not logged in'})
        return json.dumps(res_obj)
    else:
        uid = session['uid']
        if does_post_exist(post_id) == 1 :
            pass
        else:
            res_obj = {}
            res_obj.update({"status": 1})
            res_obj.update({"error": 'post does not exist'})
            return json.dumps(res_obj)

