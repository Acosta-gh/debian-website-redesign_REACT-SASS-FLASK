from flask import Flask
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv

from config import Config
from db import db

from routes.user_routes import user_bp
from routes.post_routes import post_bp
from flask_cors import CORS

# Cargar variables de entorno desde .env
load_dotenv()

def create_app():

    app = Flask(__name__)
    
    CORS(app, origins=["http://localhost:5173"])

    app.config.from_object(Config)
    # Inicializar extensiones
    db.init_app(app)
    # Importante: inicializar aquí si se usa dentro de create_app
    jwt = JWTManager(app)

    # Registrar blueprints (rutas)
    app.register_blueprint(user_bp)
    app.register_blueprint(post_bp)

    # Crear tablas
    with app.app_context():
        from models.user_model import User 
        from models.post_model import Post 

        db.create_all()

    return app


# Crear la app y correrla
app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
