from jedi import app
from jedi.modals.dbschema import db,User, Bookmark, Post
import json

def does_post_exist(post_id):
    post = Post.query.filter_by(id=post_id).first()
    if post is None:
        return "no"
    else:
        return "yes"

def does_user_exist(user_id):
    user = User.query.filter_by(id=user_id).first()
    if user is None:
        return "no"
    else:
        return "yes"

def does_username_exist(user_username):
    username = User.query.filter_by(username=user_username).first()
    if username is None:
        return "no"
    else:
        return "yes"

