from flask import Flask,render_template,request, session, redirect
from jedi import app
from jedi.modals.dbschema import db,User
import json
import bcrypt
import bleach


@app.get('/register')
def register():
    if 'uid' in session:
        return redirect('/feed')
    else:
        return render_template('register.html')


@app.post('/register')
def register_post():
    data = request.get_json()

    username = bleach.linkify(bleach.clean(data['username']))
    password  = data['password']

    if len(username)==0 or len(password)==0 or username is None or password is None:
        res_obj = {}
        res_obj.update({"status":1})
        res_obj.update({"error":'Fields can not be left empty'})
        return json.dumps(res_obj)

    print(username+ "    " + password)

    user = User.query.filter_by(username=username).first()

    if user is None:
        bytePwd = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(bytePwd,salt)
        user =  User(username=username, password=hashed)
        db.session.add(user)
        db.session.commit()
        res_obj = {}
        res_obj.update({"status":0})
        res_obj.update({"message":"Successful!!!! Please go and <a href='/login'>Login</a>"})
        return json.dumps(res_obj)
    else:
        res_obj = {}
        res_obj.update({"status":1})
        res_obj.update({"error":"User already exists"})
        return json.dumps(res_obj)