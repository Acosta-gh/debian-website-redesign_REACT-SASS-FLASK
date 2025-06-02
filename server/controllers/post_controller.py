from flask import request, jsonify
from db import db
from models.post_model import Post


def create_post():
    data = request.get_json()
    if not data:
        return jsonify({"error": "⚠️ No data provided"}), 400

    post = Post(
        title=data.get('title'),
        description=data.get('description'),
        content=data.get('content'),
    )

    db.session.add(post)
    db.session.commit()

    return jsonify({
        "message": "✅ Post created succesfully",
        "post": post.to_dict()
    }), 201


def delete_post(post_id):
    post = Post.query.get(post_id)
    if not post:
        return jsonify({"error": "❌ Post not found"}), 404

    db.session.delete(post)
    db.session.commit()

    return jsonify({"message": "✅ Post deleted successfully"}), 200


def get_posts():
    posts = Post.query.all()
    return jsonify({
        "message": "✅ Posts retrieved successfully",
        "posts": [post.to_dict() for post in posts]}
    ), 200


def get_post(post_id):
    post = Post.query.get(post_id)
    if not post:
        return jsonify({"error": "❌ Post not found"}), 404
    return jsonify({
        "message": "Post retrieved successfully",
        "post": post.to_dict()
    })
