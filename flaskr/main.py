import functools

from flask import (Blueprint, flash, g, redirect, render_template, request, session, url_for)

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('main.html')

@bp.route('/blog')
def blog():
    return render_template('blog.html')

@bp.route('/about')
def about():
    return render_template('about.html')