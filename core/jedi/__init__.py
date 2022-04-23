from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = 'dkljsakljdlksajlk'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jedi.db'
db = SQLAlchemy(app)

from jedi.routes import login
from jedi.routes import logout
from jedi.routes import home
from jedi.routes import feed
from jedi.routes import explore
from jedi.routes import createpost
from jedi.routes import register
from jedi.routes import boostpost
from jedi.routes import profile
from jedi.routes import rss

