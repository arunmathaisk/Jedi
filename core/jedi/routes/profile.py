from flask import Flask, render_template, request, session, redirect
from flask_marshmallow import Marshmallow
from jedi import app
from jedi.modals.dbschema import db, ma, User, Post, UserSchema, PostSchema
import json
import datetime

@app.get('/profile')
def profile():
   if not 'uid' in session:
      return redirect('/login')
   return render_template('profile.html')