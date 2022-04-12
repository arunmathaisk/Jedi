from flask import Flask,render_template,request
from jedi import app
from jedi.modals.dbschema import db,User
import json


@app.get('/register')
def register():
    return render_template('register.html')


@app.post('/register')
def register_post():
    data = request.get_json()

    username  = data['username']
    password  = data['password']

    if len(username)==0 or len(password)==0 or username is None or password is None:
        res_obj = {}
        res_obj.update({"status":1})
        res_obj.update({"error":'Fields can not be left empty'})
        return json.dumps(res_obj)

    print(username+ "    " + password)

    user = User.query.filter_by(username=username).first()

    if user is None:
        user =  User(username=username, password=password)
        db.session.add(user)
        db.session.commit()
        res_obj = {}
        res_obj.update({"status":0})
        return json.dumps(res_obj)
    else:
        res_obj = {}
        res_obj.update({"status":1})
        res_obj.update({"error":'user already exists'})
        return json.dumps(res_obj)