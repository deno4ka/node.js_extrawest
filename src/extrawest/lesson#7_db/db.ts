import Post from './model/db/post';
import {IFindOptions, Sequelize} from 'sequelize-typescript';

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
        // return await Post.find( {where: { id: postId } }); // Doesn't work!
        // return await Post.findById( postId ); // FUCK THEM!! With Sequelize v5, findById() was replaced by findByPk()
        return await Post.findByPk( postId );
    }

    public static async getPosts(): Promise<Post[]> {
        return await Post.findAll();
    }

    public static async updatePost(post: Post): Promise<[number, Post[]]> {
        return await Post.update(
            {userId: post.userId, title: post.title, body: post.body},
            {where: {id: post.id} }
            );
    }

    public static async deletePost(postId: number): Promise<number> {
        console.log('deletePost postId=' + postId);
        return await Post.destroy( {where: {id: postId} } );
    }

}
