import {JsonProperty} from 'json-object-mapper';

export default class Comment {

    @JsonProperty( {name: 'postId'} )
    private postId: number;

    @JsonProperty( {name: 'id'} )
    private commentId: number;

    @JsonProperty( {name: 'name'} )
    private commentName: string;

    @JsonProperty( {name: 'email'} )
    private commentEmail: string;

    @JsonProperty( {name: 'body'})
    private commentBody: string;

}
