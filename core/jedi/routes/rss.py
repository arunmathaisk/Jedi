from flask import Flask, render_template, request, session, redirect
from jedi import app
from jedi.modals.dbschema import db, ma, User, Post, UserSchema, PostSchema
import json
import datetime
from feedgen.feed import FeedGenerator
from flask import make_response


@app.post('/rss_feed/<int:uid>')
@app.get('/rss_feed/<int:uid>')
def rss(uid):
    posts = Post.query.filter_by(user_id=uid).all()
    fg = FeedGenerator()
    fg.title('Jedi RSS Feed')
    fg.description('Jedi RSS Feed')
    fg.link(href='jedi.arunmathaisk.in')

    for i in posts:
        fe = fg.add_entry()
        fe.title(str(i.content_hash))
        fe.description(i.content)
        #fe.pubDate(i.timestamp)

    response = make_response(fg.rss_str())
    response.headers.set('Content-Type', 'application/rss+xml')

    return response
