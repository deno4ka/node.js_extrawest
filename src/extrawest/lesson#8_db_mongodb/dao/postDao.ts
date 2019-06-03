import Post from '../model/db/post';
import Comment from '../model/db/comment';
import PostJson from '../model/json/postJson';
import Seq, {Op} from 'sequelize';

export default class PostDao {

    public static async addPost(post: any): Promise<any> {
        const PostModel: any = new Post().getModelForClass(Post);
        (async () => {
            const p: any = new PostModel(
                post
                // {
                // title: post.title,
                // body: post.body,
                // userId: post.userId,
                // comments: post.comments
                // }
            );
            await p.save();
            const postFromDB: any = await PostModel.findOne();

            // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
            console.log('>>> post added: ' + postFromDB);
            return postFromDB;
        })();
        // return await post.save();
    }

    // public static async getPostById(postId: number): Promise<Post> {
    //     return await Post.findByPk( postId );
    // }

    public static async getPosts(postParams: PostJson): Promise<Post[]> {
        // http://localhost:8080/posts?id=2&title=qui%20est%20esse&userId=1
        // const whereParams: any = {};
        // if (postParams.id) { whereParams.id = postParams.id; }
        // if (postParams.title) { whereParams.title = postParams.title; }
        // if (postParams.userId) { whereParams.user_id = postParams.userId; }
        // if (postParams.body) { whereParams.body = { [Op.like]: '%' + postParams.body + '%' }; }
        // const newParams: any = Object.assign({}, {
        //     id: postParams.id,
        //     title: postParams.title,
        //     user_id: postParams.userId,
        // }, {body: { [Op.like]: '%' + postParams.body + '%' }});
        // return await Post.findAll(
        //     {
        //         where: whereParams,
        //         // where: newParams,
        //         include: [
        //             { model: Comment, required: true}
        //         ]
        //     }
        // );
        console.log('>>> postDAO getPosts()');
        const PostModel: any = new Post().getModelForClass(Post);
        return await PostModel.find({});
    }

    // public static async updatePost(post: Post): Promise<[number, Post[]]> {
    //     return await Post.update(
    //         {userId: post.userId, title: post.title, body: post.body},
    //         {where: {id: post.id} }
    //         );
    // }
    //
    // public static async deletePost(postId: number): Promise<number> {
    //     console.log('deletePost postId=' + postId);
    //     return await Post.destroy( {where: {id: postId} } );
    // }

    public static async isEmpty(): Promise<boolean> {
        console.log('>>> postDao isEmpty()');
        const PostModel: any = new Post().getModelForClass(Post);
        console.log('PostModel: ', PostModel);
        return (await PostModel.findOne()) === 0;
    }

}
