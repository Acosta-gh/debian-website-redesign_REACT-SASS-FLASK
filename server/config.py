import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///' + os.path.join(basedir, 'db.sqlite3'))
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv('SECRET_KEY')

    JWT_REFRESH_TOKEN_EXPIRES =  int(os.getenv('JWT_REFRESH_TOKEN_EXPIRES', 604800)) # 604800 segundos
    JWT_ACCESS_TOKEN_EXPIRES = int(os.getenv('JWT_ACCESS_TOKEN_EXPIRES', 3600)) # 3600 segundos 

    # Lugares donde se puede buscar el token (encabezados y cookies) 
    JWT_TOKEN_LOCATION = ['headers', 'cookies']
    # Si está en producción con HTTPS, debe ser True
    JWT_COOKIE_SECURE = False  
    # Protege contra ataques CSRF 
    JWT_COOKIE_CSRF_PROTECT = True
    # Política SameSite para las cookies (puede ser 'Lax', 'Strict' o 'None')
    JWT_COOKIE_SAMESITE = 'Lax'  
    # Nombre de la cookie para el token de acceso
    JWT_COOKIE_NAME = 'access_token'
    # Nombre de la cookie para el token de refresco
    JWT_REFRESH_COOKIE_NAME = 'refresh_token'
    # Nombre del encabezado donde se espera el token
    JWT_HEADER_NAME = 'Authorization'
    # Tipo de token esperado en el encabezado, ejemplo: "Authorization: Bearer <token>"
    JWT_HEADER_TYPE = 'Bearer'
    
    
