import {JsonProperty} from 'json-object-mapper';

export default class CommentJson {

    @JsonProperty( {name: 'id', type: Number} )
    public id: number = undefined;

    @JsonProperty( {name: 'name', type: String} )
    public name: string = undefined;

    @JsonProperty( {name: 'email', type: String} )
    public email: string = undefined;

    @JsonProperty( {name: 'body', type: String} )
    public body: string = undefined;

    @JsonProperty( {name: 'postId', type: Number} )
    public postId: number = undefined;

}
