from flask import Flask,render_template,request
from jedi import app
from jedi.modals.dbschema import db,User

@app.get('/register')
def register():
    return render_template('register.html')


@app.post('/register')
def register_post():
    username  = request.form['username']
    password = request.form['password']
    print(username+ "    " + password)

    user = User.query.filter_by(username=username).first()
    if user is None:
        user =  User(username=username, password=password)
        db.session.add(user)
        db.session.commit()
        return "sucessfully registered"
    else:
        return "user already exists"
