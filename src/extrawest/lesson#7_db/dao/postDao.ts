import Post from '../model/db/post';
import Comment from '../model/db/comment';
import PostJson from '../model/json/postJson';
import Seq, {Op} from 'sequelize';

export default class PostDao {

    public static async addPost(post: Post): Promise<Post> {
        return await post.save();
    }

    public static async getPostById(postId: number): Promise<Post> {
        return await Post.findByPk( postId );
    }

    public static async getPosts(postParams: PostJson): Promise<Post[]> {
        // http://localhost:8080/posts?id=2&title=qui%20est%20esse&userId=1
        const whereParams: any = {};
        if (postParams.id) { whereParams.id = postParams.id; }
        if (postParams.title) { whereParams.title = postParams.title; }
        if (postParams.userId) { whereParams.user_id = postParams.userId; }
        if (postParams.body) { whereParams.body = { [Op.like]: '%' + postParams.body + '%' }; }
        // const newParams: any = Object.assign({}, {
        //     id: postParams.id,
        //     title: postParams.title,
        //     user_id: postParams.userId,
        // }, {body: { [Op.like]: '%' + postParams.body + '%' }});
        return await Post.findAll(
            {
                where: whereParams,
                // where: newParams,
                include: [
                    { model: Comment, required: true}
                ]
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
