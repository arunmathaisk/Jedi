from jedi import db


class User(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(15),nullable=False,unique=True)
    email = db.Column(db.String(50),nullable=False,unique=True)
    password = db.Column(db.String(80),nullable=False)   
    blog_posts = db.relationship('BlogPost',backref='author',lazy=True)


class BlogPost(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    tweet = db.Column(db.String(500),nullable=False)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'),nullable=False)