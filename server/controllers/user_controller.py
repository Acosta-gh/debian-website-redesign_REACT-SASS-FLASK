from flask import request, jsonify

from models.user_model import User

from db import db

from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token


def create_user():
    data = request.get_json()
    if not data:
        return jsonify({"error": "⚠️ No data provided"}), 400

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"error": "⚠️ All fields are required"}), 400

    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({"error": "⚠️ Username or email already exists"}), 400

    hashed_password = generate_password_hash(password)

    user = User(
        username=username,
        email=email,
        password=hashed_password
    )

    try:
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        db.session.rollback()  # Deshace cambios en caso de error
        return jsonify({"error": f"❌ Error creating user: {str(e)}"}), 500

    access_token = create_access_token(identity=str(user.id)) # Se usa string para evitar "msg": "Subject must be a string" 
    refresh_token = create_refresh_token(identity=str(user.id))

    return jsonify({
        "message": "✅ User created successfully",
        "user": user.to_dict(),
        "access_token": access_token,
        "refresh_token": refresh_token
    }), 201


def login_user():
    data = request.get_json()
    if not data:
        return jsonify({"error": "⚠️ No data provided"}), 400

    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "⚠️ Username and password are required"}), 400

    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({"error": "❌ User not found"}), 404

    if not check_password_hash(user.password, password):
        return jsonify({"error": "❌ Invalid password"}), 401

    isAdmin = user.isAdmin; 
    access_token = create_access_token(identity=str(user.id), additional_claims={"isAdmin": str(isAdmin)}) # Se usa string para evitar "msg": "Subject must be a string" 
    refresh_token = create_refresh_token(identity=str(user.id))

    return jsonify({
        "message": "✅ Login successful",
        "user": user.to_dict(),
        "access_token": access_token,
        "refresh_token": refresh_token,
        "isAdmin": user.isAdmin
    }), 201


def delete_user():
    data = request.get_json()
    user_id = data.get('user_id')
    if not user_id:
        return jsonify({"error": "⚠️ User ID is required"}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "❌ User not found"}), 404

    db.session.delete(user)
    db.session.commit()

    return jsonify({"message": "✅ User deleted successfully"}), 200


def get_user():
    data = request.get_json()
    user_id = data.get('user_id')
    if not user_id:
        return jsonify({"error": "⚠️ User ID is required"}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({"error": "❌ User not found"}), 404

    return jsonify({"user": user.to_dict()}), 200


def list_users():
    users = User.query.all()
    return jsonify({"users": [user.to_dict() for user in users]}), 200


def logout_user():
    # La idea es que el logout se maneje en el cliente eliminando el token
    return jsonify({"message": "✅ Logout successful"}), 200
