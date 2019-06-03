import {JsonProperty} from 'json-object-mapper';

export default class PostJson {

    @JsonProperty( {name: 'id', type: Number} )
    public id: number = undefined;

    @JsonProperty( {name: 'title', type: String} )
    public title: string = undefined;

    @JsonProperty( {name: 'body', type: String} )
    public body: string = undefined;

    @JsonProperty( {name: 'userId', type: Number} )
    public userId: number = undefined;

}
