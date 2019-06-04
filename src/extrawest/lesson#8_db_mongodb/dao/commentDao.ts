import Comment from '../model/db/comment';
import CommentJson from '../model/json/commentJson';

import Post from '../model/db/post';
import PostJson from '../model/json/postJson';

export default class CommentDao {

    public static async addComment(comment: any): Promise<void> {
        try {
            const CommentModel: any = new Comment().getModelForClass(Comment);
            (async () => {
                console.log('comment to add: ', comment);
                const c: any = new CommentModel({
                    comment
                });
                await c.save();
                console.log('comment after save: ', c);
                // const commentFromDB: any = await CommentModel.findOne();
                // console.log(commentFromDB);
                // return commentFromDB;
            })();
        } catch (e) {
            console.log(e);
        }
    }

    // public static async getCommentById(commentId: number): Promise<Comment> {
    //     try {
    //         return await Comment.findByPk( commentId );
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    public static async getComments(commentParams: CommentJson): Promise<Comment[]> {
        try {
            // const whereParams: any = {};
            // if (commentParams.id) { whereParams.id = commentParams.id; }
            // if (commentParams.name) { whereParams.name = commentParams.name; }
            // if (commentParams.email) { whereParams.email = commentParams.email; }
            // if (commentParams.postId) { whereParams.post_id = commentParams.postId; }
            // if (commentParams.body) { whereParams.body = { [Op.like]: '%' + commentParams.body + '%' }; }
            // return await Comment.findAll(
            //     {
            //         where: whereParams
            // }
            // );
            const CommentModel: any = new Comment().getModelForClass(Comment);
            return await CommentModel.find({});
        } catch (e) {
            console.log(e);
        }
    }

    // public static async updateComment(comment: Comment): Promise<[number, Comment[]]> {
    //     try {
    //         return await Comment.update(
    //             {name: comment.name, email: comment.email, body: comment.body, post_id: comment.postId},
    //             {where: {id: comment.id} }
    //         );
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // public static async deleteComment(commentId: number): Promise<number> {
    //     try {
    //         console.log('deleteComment commentId=' + commentId);
    //         return await Comment.destroy( {where: {id: commentId} } );
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    public static async isEmpty(): Promise<boolean> {
        try {
            const CommentModel: any = new Comment().getModelForClass(Comment);
            const comment: any = await CommentModel.findOne();
            console.log('>>> commentDao isEmpty(), comment: ', comment);
            return comment === null;
        } catch (e) {
            console.log(e);
        }
    }

}
