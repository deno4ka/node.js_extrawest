import {Table, Column, Model, HasMany, BelongsTo, ForeignKey, DataType} from 'sequelize-typescript';
import Post from './post';

@Table( {tableName: 'comments', timestamps: false} )
export default class Comment extends Model<Comment> {

    @Column( {field: 'id', primaryKey: true, type: DataType.NUMBER } )
    public commentId: number;

    @Column( {field: 'name', type: DataType.TEXT } )
    public commentName: string;

    @Column( {field: 'email', type: DataType.TEXT } )
    public commentEmail: string;

    @Column( {field: 'body', type: DataType.TEXT } )
    public commentBody: string;

    @Column( {field: 'post_id', type: DataType.NUMBER} )
    @ForeignKey(() => Post)
    public postId: number;

    @BelongsTo(() => Post)
    public user: Post;

}
