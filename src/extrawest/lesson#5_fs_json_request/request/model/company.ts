import {JsonProperty} from 'json-object-mapper';

export default class Company {

    @JsonProperty( {name: 'name', type: String} )
    public name: string = undefined;

    @JsonProperty( {name: 'catchPhrase', type: String} )
    public catchPhrase: string = undefined;

    @JsonProperty( {name: 'bs', type: String} )
    public bs: string = undefined;

}
