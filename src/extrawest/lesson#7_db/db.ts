import Post from './model/db/post';
import {Sequelize} from 'sequelize-typescript';

const sequelize: Sequelize =  new Sequelize({
    database: 'node_js',
    dialect: 'mysql',
    username: 'root',
    password: 'admin',
    storage: ':memory:',
    modelPaths: [__dirname + '/model/db']
});


export default class DB {

    public static async addPost(post: Post): Promise<Post> {
        return await post.save();
    }

    public static async getPost(postId: number): Promise<Post> {
        return await Post.findOne();
    }

    public static async getPosts(): Promise<Post[]> {
        // const connectionManager: ConnectionManager = sequelize.connectionManager();
        // const connection: Connection = connectionManager.getConnection({type: 'write'});
        // connection.
        return await Post.findAll({raw: true});
    }

    public static async updatePost(post: Post): Promise<[number, Post[]]> {
        return await Post.update(post, {where: {id: post.id}});
    }

}
