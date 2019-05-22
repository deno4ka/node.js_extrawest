import {Table, Column, Model, HasMany, DataType} from 'sequelize-typescript';

import Comment from './comment';

@Table( {tableName: 'post', timestamps: false} )
export default class Post extends Model<Post> {

    @Column( { field: 'id', primaryKey: true } )
    public id: number;

    @Column( { field: 'title', type: DataType.TEXT } )
    public title: string;

    @Column( { field: 'body' } )
    public body: string;

    @Column( {field: 'user_id'} )
    public userId: number;

    @HasMany(() => Comment)
    public comments: Comment[];

}
