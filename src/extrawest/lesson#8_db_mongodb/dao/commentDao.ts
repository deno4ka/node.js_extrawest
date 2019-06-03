import Comment from '../model/db/comment';
import CommentJson from '../model/json/commentJson';
import Seq, {Op} from 'sequelize';
import * as mongoose from 'mongoose';

import Post from '../model/db/post';
import PostJson from '../model/json/postJson';

export default class CommentDao {

    public static async addComment(comment: any): Promise<any> {
        const CommentModel: any = new Comment().getModelForClass(Comment);
        (async () => {
            const c: any = new CommentModel({
                // name: comment.name,
                // body: comment.body,
                // email: comment.email,
                // postId: comment.postId
                comment
            });
            await c.save();
            const commentFromDB: any = await CommentModel.findOne();

            // prints { _id: 59218f686409d670a97e53e0, name: 'JohnDoe', __v: 0 }
            console.log(commentFromDB);
            return commentFromDB;
        })();
        // return await comment.save();
    }

    // public static async getCommentById(commentId: number): Promise<Comment> {
    //     return await Comment.findByPk( commentId );
    // }
    //
    // public static async getComments(commentParams: CommentJson): Promise<Comment[]> {
    //     const whereParams: any = {};
    //     if (commentParams.id) { whereParams.id = commentParams.id; }
    //     if (commentParams.name) { whereParams.name = commentParams.name; }
    //     if (commentParams.email) { whereParams.email = commentParams.email; }
    //     if (commentParams.postId) { whereParams.post_id = commentParams.postId; }
    //     if (commentParams.body) { whereParams.body = { [Op.like]: '%' + commentParams.body + '%' }; }
    //     return await Comment.findAll(
    //         {
    //             where: whereParams
    //     }
    //     );
    // }
    //
    // public static async updateComment(comment: Comment): Promise<[number, Comment[]]> {
    //     return await Comment.update(
    //         {name: comment.name, email: comment.email, body: comment.body, post_id: comment.postId},
    //         {where: {id: comment.id} }
    //         );
    // }
    //
    // public static async deleteComment(commentId: number): Promise<number> {
    //     console.log('deleteComment commentId=' + commentId);
    //     return await Comment.destroy( {where: {id: commentId} } );
    // }
    //
    // public static async isEmpty(): Promise<boolean> {
    //     return (await Comment.count()) === 0;
    // }

}
