from flask_jwt_extended import verify_jwt_in_request, get_jwt
from functools import wraps
from flask import jsonify

def is_admin(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        claims = get_jwt()

        if not claims.get("isAdmin",False):
            return jsonify({"error": "❌ You do not have permission to access this resource"}), 403
        return fn(*args, **kwargs)
    return wrapper
