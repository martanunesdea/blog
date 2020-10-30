import functools

from flask import (Blueprint, flash, g, redirect, render_template, request, session, url_for)

bp = Blueprint('blog', __name__, url_prefix='/blog')

@bp.route('/')
def index():
    return render_template('blog.html')

@bp.route('/<string:id>')
def full_page(id):

    return render_template('full_page.html')
