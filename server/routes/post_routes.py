from flask import Blueprint 
from controllers import post_controller
from middleware.isAdmin_middleware import is_admin
from flask_jwt_extended import jwt_required

post_bp = Blueprint("post", __name__, url_prefix="/post")

@post_bp.route("/", methods=["POST"])
@jwt_required() 
@is_admin
def create_post():
    return post_controller.create_post()

@post_bp.route("/",methods=["GET"])
def get_posts():
    return post_controller.get_posts()


@jwt_required() 
@is_admin
@post_bp.route("/<int:post_id>",methods=["DELETE"])
def delete_post(post_id):
    return post_controller.delete_post(post_id)


@post_bp.route("/<int:id>", methods=["GET"])
def get_post(id):
    return post_controller.get_post(id)
