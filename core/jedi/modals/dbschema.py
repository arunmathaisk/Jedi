from jedi import db, ma

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)
    posts = db.relationship('Post', backref='user', lazy=True)
    boostposts = db.relationship('Boostpost', backref='user', lazy=True)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.String(20),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class Boostpost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    og_post_id = db.Column(db.Integer, nullable=False)
    timestamp = db.Column(db.String(20),nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User 
        

class PostSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Post
        