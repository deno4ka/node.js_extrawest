import {Table, Column, Model, HasMany, DataType, IBuildOptions} from 'sequelize-typescript';

import Comment from './comment';
import {Omit, RecursivePartial} from 'sequelize-typescript/lib/utils/types';

@Table( {modelName: 'post'} )
export default class Post extends Model<Post> {

    @Column( { field: 'id', primaryKey: true } )
    public id: number = undefined;

    @Column( { field: 'title', type: DataType.TEXT } )
    public title: string = undefined;

    @Column( { field: 'body' } )
    public body: string = undefined;

    @Column( {field: 'user_id'} )
    public userId: number = undefined;

    @HasMany(() => Comment)
    public comments: Comment[];

}
