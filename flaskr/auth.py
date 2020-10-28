import functools

from flask import Blueprint, flash, g, redirect, render_template, request, session, url_for

bp = Blueprint('auth', __name__, url_prefix='/auth')


@bp.route('/register')
def register():
    return 'register here'