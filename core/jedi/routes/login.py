from flask import Flask,render_template,redirect,request,session
from jedi import app
from jedi.modals.dbschema import db,User

@app.get('/login')
def login():
    if 'uid' in session:
        return redirect('/')
    return render_template('login.html')

@app.post('/login')
def login_post():
    data = request.get_json()
    username  = data['username']
    password  = data['password']
    print(username+ "    " + password)

    user = User.query.filter_by(username=username).first()
    if user is None:
        return "user does not exist"
    else:
        if user.password == password:
            session['uid'] = user.id
            return "sucessful login by user with " + str(session['uid'])
        else:
            return "incorrect password"
