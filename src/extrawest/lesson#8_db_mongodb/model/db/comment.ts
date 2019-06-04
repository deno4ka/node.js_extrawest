import { prop, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';

import Post from './post';

// @Table( {tableName: 'comments', timestamps: false} )
export default class Comment extends Typegoose {

    // @Column( {field: 'id', primaryKey: true, type: DataType.NUMBER } )
    @prop({ unique: true, index: true })
    public id?: number;

    // @Column( {field: 'name', type: DataType.TEXT } )
    @prop()
    public name?: string;

    // @Column( {field: 'email', type: DataType.TEXT } )
    @prop()
    public email?: string;

    // @Column( {field: 'body', type: DataType.TEXT } )
    @prop()
    public body?: string;

    // @Column( {field: 'post_id', type: DataType.NUMBER} )
    // @ForeignKey(() => Post)
    @prop()
    public postId?: number;

    // @BelongsTo(() => Post)
    // @prop({ ref: Post })
    // public post: Ref<Post>;

}
