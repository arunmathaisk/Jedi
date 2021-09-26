from flask import Flask

app = Flask(__name__)

from jedi_app import routes
from jedi_app import apis