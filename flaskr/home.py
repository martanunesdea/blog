import functools

from flask import (Blueprint, flash, g, redirect, render_template, request, session, url_for)

bp = Blueprint('home', __name__)

@bp.route('/')
def index():
    return render_template('home.html')

@bp.route('/blog')
def blog():
    return render_template('blog.html')