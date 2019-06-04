import { prop, arrayProp, Typegoose, ModelType, InstanceType, Ref } from 'typegoose';

import Comment from './comment';

// @Table( {tableName: 'posts', timestamps: false} )
export default class Post extends Typegoose {

    // @Column( { field: 'id', primaryKey: true, type: DataType.NUMBER } )
    @prop( { unique: true, index: true } )
    public id?: number; // ? symbol (after some of the names) marks a member as being optional

    // @Column( { field: 'title', type: DataType.TEXT } )
    @prop()
    public title?: string;

    // @Column( { field: 'body' , type: DataType.TEXT } )
    @prop()
    public body?: string;

    // @Column( {field: 'user_id', type: DataType.NUMBER } )
    @prop()
    public userId?: number;

    // @HasMany(() => Comment)
    // @arrayProp({ itemsRef: Comment })
    // public comments?: Array<Ref<Comment>>;

}
