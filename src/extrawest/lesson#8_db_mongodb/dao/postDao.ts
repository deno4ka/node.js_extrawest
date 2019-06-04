import Post from '../model/db/post';
import Comment from '../model/db/comment';
import PostJson from '../model/json/postJson';

export default class PostDao {

    public static async addPost(post: any): Promise<void> {
        try {
            const PostModel: any = new Post().getModelForClass(Post);
            (async () => {
                const p: any = new PostModel(
                    post
                );
                await p.save();
                console.log('post after save: ', p);
                // const postFromDB: any = await PostModel.findOne();
                // console.log('>>> post added: ' + postFromDB);
                // return postFromDB;
            })();
        } catch (e) {
            console.log(e);
        }
    }

    public static async getPostById(postId: number): Promise<Post> {
        try {
            const PostModel: any = new Post().getModelForClass(Post);
            return await PostModel.find( { id: postId } );
        } catch (e) {
            console.log(e);
        }
    }

    public static async getPosts(postParams: PostJson): Promise<Post[]> {
        try {
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
            // console.log('>>> postDAO getPosts()');
            const PostModel: any = new Post().getModelForClass(Post);
            return await PostModel.find({});
        } catch (e) {
            console.log(e);
        }
    }

    // public static async updatePost(post: Post): Promise<[number, Post[]]> {
    //     try {
    //         return await Post.update(
    //             {userId: post.userId, title: post.title, body: post.body},
    //             {where: {id: post.id} }
    //         );
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    public static async deletePost(postId: number): Promise<number> {
        try {
            console.log('deletePost postId=' + postId);
            const PostModel: any = new Post().getModelForClass(Post);
            return await PostModel.remove( {id: postId} );
        } catch (e) {
            console.log(e);
        }
    }

    public static async isEmpty(): Promise<boolean> {
        try {
            const PostModel: any = new Post().getModelForClass(Post);
            const post: any = await PostModel.findOne();
            // console.log('>>> postDao isEmpty(), post: ', post);
            return post === null;
        } catch (e) {
            console.log(e);
        }
    }

}
