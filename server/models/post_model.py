from db import db


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(125), nullable=False)
    description = db.Column(db.String(50), nullable=True)
    content = db.Column(db.String(500), nullable=False)
    created_at = db.Column(
        db.DateTime, server_default=db.func.now(), nullable=False)
    updated_at = db.Column(db.DateTime, server_default=db.func.now(
    ), onupdate=db.func.now(), nullable=False)

    def to_dict(self):
        return {"id": self.id, "title": self.title, "description": self.description, "content": self.content, "created_at": self.created_at.isoformat(), "updated_at": self.updated_at.isoformat()}
