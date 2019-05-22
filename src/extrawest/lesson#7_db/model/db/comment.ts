import {Table, Column, Model, HasMany, BelongsTo, ForeignKey} from 'sequelize-typescript';

import {JsonProperty} from 'json-object-mapper';
import Post from './post';

@Table( {tableName: 'comments', timestamps: false} )
export default class Comment extends Model<Comment> {

    @Column( {field: 'id', primaryKey: true} )
    @JsonProperty( {name: 'id'} )
    public commentId: number;

    @Column( {field: 'name'} )
    @JsonProperty( {name: 'name'} )
    public commentName: string;

    @Column( {field: 'email'} )
    @JsonProperty( {name: 'email'} )
    public commentEmail: string;

    @Column( {field: 'body'} )
    @JsonProperty( {name: 'body'})
    public commentBody: string;

    @Column( {field: 'post_id'} )
    @ForeignKey(() => Post)
    @JsonProperty( {name: 'postId'} )
    public postId: number;

    @BelongsTo(() => Post)
    public user: Post;


}
