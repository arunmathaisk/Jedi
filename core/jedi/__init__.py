from flask import Flask

app = Flask(__name__)

from jedi.routes import home
