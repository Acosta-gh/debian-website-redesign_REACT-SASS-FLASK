from flask import Blueprint
from controllers import user_controller
from flask_jwt_extended import jwt_required

user_bp = Blueprint("user", __name__, url_prefix="/user")

@user_bp.route("/", methods=["POST"])
def create_user():
    return user_controller.create_user()

@user_bp.route("/login", methods=["POST"])
def login_user():
    return user_controller.login_user()

@user_bp.route("/logout", methods=["POST"])
@jwt_required()
def logout_user():
    return user_controller.logout_user() 
    