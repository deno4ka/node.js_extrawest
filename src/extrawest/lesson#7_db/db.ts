import Post from './model/db/post';
import {Sequelize} from 'sequelize-typescript';
import PostJson from './model/json/postJson';
import Seq from 'sequelize';

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

    public static async getPostById(postId: number): Promise<Post> {
        // return await Post.find( {where: { id: postId } }); // Doesn't work!
        return await Post.findByPk( postId );
    }

    public static async getPosts(postParams: PostJson): Promise<Post[]> {
        // http://localhost:8080/posts?id=2&title=qui%20est%20esse&userId=1
        const whereParams: any = {};
        if (postParams.id) { whereParams.id = postParams.id; }
        if (postParams.title) { whereParams.title = postParams.title; }
        if (postParams.userId) { whereParams.user_id = postParams.userId; }
        // if (postParams.body) { whereParams.body = {$iLike: '%' + postParams.body}; }
        return await Post.findAll(
            {
            where: whereParams
            // where: {
                // id: postParams.id,
                // title: postParams.title,
                // user_id: postParams.userId
                // body: {$iLike: '%' + postParams.body}
            // }
        }
        );
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

    public static async isEmpty(): Promise<boolean> {
        return (await Post.count()) === 0;
    }

}
