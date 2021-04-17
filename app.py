import os
from flask import Flask, escape, request, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

# FLASK_APP=app.py FLASK_ENV=development flask run