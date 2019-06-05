import Post from '../model/db/post';
import Comment from '../model/db/comment';
import PostJson from '../model/json/postJson';

export default class PostDao {

    public static async addPost(post: any): Promise<void> {
        const PostModel: any = new Post().getModelForClass(Post);
        const p: any = new PostModel(post);
        await p.save();
        console.log('post after save: ', p);
    }

    public static async getPostById(postId: number): Promise<Post> {
        const PostModel: any = new Post().getModelForClass(Post);
        return await PostModel.find( { id: postId } );
    }

    public static async getPosts(postParams: PostJson): Promise<Post[]> {
        // http://localhost:8080/posts?id=2&title=qui%20est%20esse&userId=1
        const whereParams: any = {};
        if (postParams.id) { whereParams.id = postParams.id; }
        if (postParams.title) { whereParams.title = postParams.title; }
        if (postParams.userId) { whereParams.userId = postParams.userId; }
        if (postParams.body) { whereParams.body = {$regex: '.*' + postParams.body + '.*'}; }
        const PostModel: any = new Post().getModelForClass(Post);
        console.log('whereParams: ', whereParams);
        return await PostModel.find(whereParams);
    }

    public static async updatePost(post: Post): Promise<[number, Post[]]> {
        const PostModel: any = new Post().getModelForClass(Post);
        return await PostModel.update(
            {userId: post.userId, title: post.title, body: post.body},
            {where: {id: post.id} }
        );
    }

    public static async deletePost(deleteParams: PostJson): Promise<number> {
        const whereParams: any = {};
        if (deleteParams.id) { whereParams.id = deleteParams.id; }
        console.log('deletePost() whereParams=', whereParams);
        const PostModel: any = new Post().getModelForClass(Post);
        // return await PostModel.remove( whereParams );
        return await PostModel.deleteMany( whereParams );
    }

    public static async isEmpty(): Promise<boolean> {
        const PostModel: any = new Post().getModelForClass(Post);
        const post: any = await PostModel.findOne();
        // console.log('>>> postDao isEmpty(), post: ', post);
        return post === null;
    }

}
