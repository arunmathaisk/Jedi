from flask import Flask, render_template, request, session, redirect
from jedi import app
import json
import datetime

@app.get('/profile')
def profile():
   if not 'uid' in session:
      return redirect('/login')
   return render_template('profile.html')