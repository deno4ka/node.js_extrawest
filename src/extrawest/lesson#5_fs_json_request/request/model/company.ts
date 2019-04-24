import {JsonProperty} from 'json-object-mapper';

export default class Company {

    @JsonProperty( {name: 'name', type: String} )
    public name: string;

    @JsonProperty( {name: 'catchPhrase', type: String} )
    public catchPhrase: string;

    @JsonProperty( {name: 'bs', type: String} )
    public bs: string;

}
