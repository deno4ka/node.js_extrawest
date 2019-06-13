import Comment from '../model/db/comment';
import CommentJson from '../model/json/commentJson';

import Post from '../model/db/post';
import PostJson from '../model/json/postJson';

export default class CommentDao {

    // public static async addComment(comment: any): Promise<void> {
    //     const CommentModel: any = new Comment().getModelForClass(Comment);
    //     console.log('comment to add: ', comment);
    //     const c: any = new CommentModel(comment);
    //     await c.save();
    //     console.log('comment after save: ', c);
    // }
    //
    // public static async getCommentById(commentId: number): Promise<Comment> {
    //     const CommentModel: any = new Comment().getModelForClass(Comment);
    //     return await CommentModel.find( {id : commentId} );
    // }
    //
    // public static async getComments(commentParams: CommentJson): Promise<Comment[]> {
    //     const whereParams: any = {};
    //     if (commentParams.id) { whereParams.id = commentParams.id; }
    //     if (commentParams.name) { whereParams.name = commentParams.name; }
    //     if (commentParams.email) { whereParams.email = commentParams.email; }
    //     if (commentParams.postId) { whereParams.post_id = commentParams.postId; }
    //     if (commentParams.body) { whereParams.body = {$regex: '.*' + commentParams.body + '.*'}; }
    //     const CommentModel: any = new Comment().getModelForClass(Comment);
    //     return await CommentModel.find( whereParams );
    // }
    //
    // public static async updateComment(comment: Comment): Promise<[number, Comment[]]> {
    //     const CommentModel: any = new Comment().getModelForClass(Comment);
    //     return await CommentModel.update(
    //         {name: comment.name, email: comment.email, body: comment.body, post_id: comment.postId},
    //         {where: {id: comment.id} }
    //     );
    // }
    //
    // public static async deleteComment(commentId: number): Promise<number> {
    //     console.log('deleteComment commentId=' + commentId);
    //     const CommentModel: any = new Comment().getModelForClass(Comment);
    //     return await CommentModel.remove( {id: commentId} );
    // }
    //
    // public static async isEmpty(): Promise<boolean> {
    //     const CommentModel: any = new Comment().getModelForClass(Comment);
    //     const comment: any = await CommentModel.findOne();
    //     console.log('>>> commentDao isEmpty(), comment: ', comment);
    //     return comment === null;
    // }

}
