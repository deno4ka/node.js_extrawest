import {Table, Column, Model, HasMany, DataType} from 'sequelize-typescript';

import Comment from './comment';

@Table( {tableName: 'posts', timestamps: false} )
export default class Post extends Model<Post> {

    @Column( { field: 'id', primaryKey: true, type: DataType.NUMBER } )
    public id: number;

    @Column( { field: 'title', type: DataType.TEXT } )
    public title: string;

    @Column( { field: 'body' , type: DataType.TEXT } )
    public body: string;

    @Column( {field: 'user_id', type: DataType.NUMBER } )
    public userId: number;

    @HasMany(() => Comment)
    public comments: Comment[];

}
